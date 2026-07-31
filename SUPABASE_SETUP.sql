-- ============================================================================
-- Diamond Painting Colors — cloud sync setup for Supabase (email + password)
-- Paste this WHOLE file into Supabase -> SQL Editor -> New query -> Run.
-- Safe to run again; it replaces any earlier setup.
--
-- Security model: each row belongs to the logged-in user (user_id). Row Level
-- Security makes it impossible to read or write another account's rows, even
-- with the public key. You log in with your email + password.
-- ============================================================================

-- Remove the older "sync code" setup if it exists.
drop table if exists public.kv cascade;
drop function if exists public.kv_pull(text);
drop function if exists public.kv_push(text, text, text);
drop function if exists public.kv_delete(text, text);

-- One row per (user, key). user_id defaults to the caller's auth id.
create table public.kv (
  user_id uuid   not null default auth.uid() references auth.users(id) on delete cascade,
  k       text   not null,
  v       text,
  ts      bigint not null default 0,   -- server-set last-updated time (epoch ms)
  primary key (user_id, k)
);

alter table public.kv enable row level security;

-- Each account can only see and change its own rows.
create policy "kv_select_own" on public.kv for select using (user_id = auth.uid());
create policy "kv_insert_own" on public.kv for insert with check (user_id = auth.uid());
create policy "kv_update_own" on public.kv for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "kv_delete_own" on public.kv for delete using (user_id = auth.uid());

grant select, insert, update, delete on public.kv to authenticated;

-- Stamp every write with the server clock so devices agree on "who's newest".
create or replace function public.kv_stamp()
returns trigger
language plpgsql
as $$
begin
  new.ts := (extract(epoch from clock_timestamp()) * 1000)::bigint;
  return new;
end;
$$;

drop trigger if exists kv_stamp_trg on public.kv;
create trigger kv_stamp_trg before insert or update on public.kv
  for each row execute function public.kv_stamp();

-- ============================================================================
-- After running this, go to  Authentication -> Sign In / Providers -> Email
-- and (for a smooth personal setup) turn OFF "Confirm email" so you can log in
-- immediately after creating your account. Optional: once your account exists,
-- turn OFF "Allow new users to sign up" to stop anyone else registering.
-- ============================================================================

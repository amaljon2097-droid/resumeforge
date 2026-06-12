import { createAdminClient } from "@/lib/supabase/admin";
import type { UserProfile } from "@/lib/types/database";

export async function ensureUserProfile(
  userId: string,
  email: string
): Promise<void> {
  const supabase = createAdminClient();

  const { data: existing } = await supabase
    .from("users")
    .select("id")
    .eq("id", userId)
    .maybeSingle();

  if (!existing) {
    await supabase.from("users").insert({ id: userId, email });
  }
}

export async function getUserProfile(
  userId: string
): Promise<UserProfile | null> {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (error || !data) return null;
  return data as UserProfile;
}

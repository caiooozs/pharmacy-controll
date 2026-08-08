"use server";

import { createClient } from "@/supabase/server";
import { LoginCredentials } from "@/components/Auth/auth.model";

export async function loginUser(credentials: LoginCredentials): Promise<{ error: string | null }> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    return { error: error.message };
  }

  return { error: null };
}


import { createClient } from "@supabase/supabase-js";
import { event } from "quasar";
import useAuthUser from "src/composable/UseAuthUser";

const supabaseUrl = "https://xxtjtmobfwlirwfglmrc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4dGp0bW9iZndsaXJ3ZmdsbXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MDUxNjksImV4cCI6MjAxMzM4MTE2OX0.FLe88EIoXeP8_z8ZfC6qvlP4InmRzjePZBVhHRl0GuA";
const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();
  user.value = session?.user || null;
});

export default function useSupabase() {
  return { supabase };
}

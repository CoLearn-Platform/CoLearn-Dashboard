import supabase from "./supabase";

// sign in
export async function signIn(data) {
  let { data: user, error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
  return user;
}

// logout user
export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    console.log("error in logout", error);
    throw new Error(error.message);
  }
}

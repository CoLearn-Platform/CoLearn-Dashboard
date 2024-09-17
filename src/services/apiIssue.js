import supabase from "./supabase";

export async function getAllIssue() {
  let { data: issues, error } = await supabase.from("issue").select("*");
  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
  return issues;
}

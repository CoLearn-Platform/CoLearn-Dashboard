import supabase from "./supabase";

export async function getAllIssue() {
  let { data: feedbacks, error } = await supabase.from("feedback").select("*");
  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
  return feedbacks;
}

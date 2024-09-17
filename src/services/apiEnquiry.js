import supabase from "./supabase";

export async function getAllEnquiry() {
  let { data: enquiry, error } = await supabase.from("enquiry").select("*");
  if (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
  return enquiry;
}

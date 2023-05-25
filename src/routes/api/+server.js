import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  const subject = url.searchParams.get("subject");
  return json({ message: `Hello, ${subject}!` });
}

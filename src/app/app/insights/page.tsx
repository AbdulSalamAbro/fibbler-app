"use server";

import { redirect } from "next/navigation";

export default async function insights() {
  redirect(`https://app.fibbler.co/app/insights`); // Navigate to the new post page
}

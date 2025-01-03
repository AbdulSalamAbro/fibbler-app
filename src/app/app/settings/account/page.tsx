"use server";

import { redirect } from "next/navigation";

export default async function sources() {
  redirect(`https://app.fibbler.co/app/settings/account`); // Navigate to the new post page
}

import { cache } from "react";
import { auth } from "./auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getSession = cache(async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
});

export const requireSession = cache(async () => {
  const session = await getSession();
  if (!session) redirect("/login");
  return session;
});

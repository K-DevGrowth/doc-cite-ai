import { requireSession } from "@/lib/auth/session";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense>
      <DashboardShell />
    </Suspense>
  );
}

async function DashboardShell() {
  const session = await requireSession();
  return <h1>Xin chào {session.user.name}</h1>;
}

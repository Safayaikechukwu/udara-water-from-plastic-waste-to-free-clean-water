import type { Metadata } from "next";
import { AccountActionForm } from "@/components/account/AccountActionForm";
import { AccountShell } from "@/components/account/AccountShell";

export const metadata: Metadata = {
  title: "Block Account | Kedu",
  description: "Freeze your Kedu account instantly if your phone is lost or stolen.",
};

export default function BlockAccountPage() {
  return (
    <AccountShell>
      <AccountActionForm mode="block" />
    </AccountShell>
  );
}

import type { Metadata } from "next";
import { AccountActionForm } from "@/components/account/AccountActionForm";
import { AccountShell } from "@/components/account/AccountShell";

export const metadata: Metadata = {
  title: "Block Account | Udara",
  description: "Freeze your Udara account instantly if your phone is lost or stolen.",
};

export default function BlockAccountPage() {
  return (
    <AccountShell>
      <AccountActionForm mode="block" />
    </AccountShell>
  );
}

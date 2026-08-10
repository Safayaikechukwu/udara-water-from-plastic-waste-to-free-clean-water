import type { Metadata } from "next";
import { AccountActionForm } from "@/components/account/AccountActionForm";
import { AccountShell } from "@/components/account/AccountShell";

export const metadata: Metadata = {
  title: "Unblock Account | Udara",
  description: "Restore access to your Udara account after verifying your details.",
};

export default function UnblockAccountPage() {
  return (
    <AccountShell>
      <AccountActionForm mode="unblock" />
    </AccountShell>
  );
}

"use client";

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

export default function InviteLinkInput({
  inviteLink,
}: {
  inviteLink: string;
}) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  return (
    <InputRoot>
      <InputIcon>
        <Link />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyToClipboard}>
        <Copy />
      </IconButton>
    </InputRoot>
  );
}

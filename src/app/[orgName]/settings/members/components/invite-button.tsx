"use client";

import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { InviteModal } from "./invite-modal";

export const InviteButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <InviteModal open={isOpen} onOpenChange={(e: any) => setIsOpen(e.open)}>
      <Button size="xs" onClick={() => setIsOpen(true)}>
        Invite people
      </Button>
    </InviteModal>
  );
};

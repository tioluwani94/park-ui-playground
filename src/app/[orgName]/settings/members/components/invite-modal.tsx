"use client";
import React, { ReactNode } from "react";
import { Stack } from "styled-system/jsx/stack";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogPositioner,
  DialogProps,
  DialogTitle,
} from "~/components/ui/dialog";
import { IconButton } from "~/components/ui/icon-button";

export const InviteModal = (props: DialogProps & { children: ReactNode }) => {
  const { children, ...rest } = props;
  return (
    <>
      {children}
      <Dialog {...rest}>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent minW="md">
            <Stack gap="8" p="6">
              <Stack gap="1">
                <DialogTitle>Invite People</DialogTitle>
              </Stack>
              <Stack
                gap="3"
                width="full"
                direction="row"
                justifyContent="flex-end"
              >
                <DialogCloseTrigger asChild>
                  <Button size="xs" variant="ghost">
                    Cancel
                  </Button>
                </DialogCloseTrigger>
                <Button size="xs">Invite</Button>
              </Stack>
            </Stack>
            <DialogCloseTrigger asChild position="absolute" top="2" right="2">
              <IconButton aria-label="Close Dialog" variant="ghost" size="xs">
                <svg
                  fill="none"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </Dialog>
    </>
  );
};

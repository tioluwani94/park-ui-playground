"use client";

import React, { ReactNode } from "react";
import { Stack } from "styled-system/jsx/stack";
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogPositioner,
  DialogProps,
  DialogTitle,
} from "~/components/ui/dialog";
import { IconButton } from "./icon-button";

export const Modal = (
  props: DialogProps & { title?: string; children: ReactNode; size?: any }
) => {
  const { title, children, size = "sm", ...rest } = props;
  return (
    <Dialog {...rest}>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent minW={size}>
          <Stack gap="8" p="6">
            {title && (
              <Stack gap="1">
                <DialogTitle>{title}</DialogTitle>
              </Stack>
            )}
            {children}
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
  );
};

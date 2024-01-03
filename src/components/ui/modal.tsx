"use client";

import React, { ReactNode } from "react";
import { Stack, StackProps } from "styled-system/jsx/stack";
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogPositioner,
  DialogProps,
  DialogTitle,
} from "~/components/ui/dialog";
import { IconButton, IconButtonProps } from "./icon-button";

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
            <ModalCloseButton />
          </DialogCloseTrigger>
        </DialogContent>
      </DialogPositioner>
    </Dialog>
  );
};

export const ModalFooter = (props: StackProps) => (
  <Stack
    gap="3"
    width="full"
    direction="row"
    justifyContent="flex-end"
    {...props}
  />
);

export const ModalCloseButton = (props: IconButtonProps) => (
  <IconButton aria-label="Close modal" variant="ghost" size="xs" {...props}>
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
);

const Root = Modal;
const Footer = ModalFooter;
const CloseButton = ModalCloseButton;

export { Root, Footer, CloseButton };

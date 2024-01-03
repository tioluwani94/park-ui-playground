"use client";

import React, { ReactNode } from "react";
import { Stack } from "styled-system/jsx/stack";
import { Button } from "~/components/ui/button";
import { DialogCloseTrigger, DialogProps } from "~/components/ui/dialog";
import { IconButton } from "~/components/ui/icon-button";
import { Modal } from "~/components/ui/modal";
import * as TagsInput from "~/components/ui/tags-input";
import * as Select from "~/components/ui/select";
import { HStack } from "styled-system/jsx/hstack";

export const InviteModal = (props: DialogProps & { children: ReactNode }) => {
  const { children, ...rest } = props;

  const roles = [
    { label: "Admin", value: "admin" },
    { label: "Member", value: "member" },
  ];

  return (
    <>
      {children}
      <Modal size="md" title="Invite people" {...rest}>
        <Stack gap={6}>
          <TagsInput.Root>
            {(api: any) => (
              <>
                <TagsInput.Label>Emails</TagsInput.Label>
                <HStack>
                  <TagsInput.Control flex={1}>
                    {api.value.map((value: any, index: number) => (
                      <TagsInput.Item key={index} index={index} value={value}>
                        <TagsInput.ItemText>{value}</TagsInput.ItemText>
                        <TagsInput.ItemDeleteTrigger asChild>
                          <IconButton variant="link" size="xs">
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
                        </TagsInput.ItemDeleteTrigger>
                        <TagsInput.ItemInput />
                      </TagsInput.Item>
                    ))}
                    <TagsInput.Input
                      fontSize="sm"
                      placeholder="example@company.com, example2@company.com"
                    />
                  </TagsInput.Control>
                  <TagsInput.ClearTrigger asChild>
                    <Button variant="outline">Clear</Button>
                  </TagsInput.ClearTrigger>
                </HStack>
              </>
            )}
          </TagsInput.Root>
          <Select.Root
            size="sm"
            items={roles}
            positioning={{ sameWidth: true }}
          >
            <Select.Label>Role</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select a role" />
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
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                <Select.ItemGroup id="role">
                  {roles.map((item) => (
                    <Select.Item key={item.value} item={item}>
                      <Select.ItemText textStyle="sm">
                        {item.label}
                      </Select.ItemText>
                      <Select.ItemIndicator>
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.ItemGroup>
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
        </Stack>
        <Stack gap="3" width="full" direction="row" justifyContent="flex-end">
          <DialogCloseTrigger asChild>
            <Button size="xs" variant="ghost">
              Cancel
            </Button>
          </DialogCloseTrigger>
          <Button size="xs">Invite</Button>
        </Stack>
      </Modal>
    </>
  );
};

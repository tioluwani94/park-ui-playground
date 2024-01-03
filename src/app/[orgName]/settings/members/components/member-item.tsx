"use client";

import React, { useState } from "react";
import { Flex } from "styled-system/jsx/flex";
import { HStack } from "styled-system/jsx/hstack";
import { Stack } from "styled-system/jsx/stack";
import { Avatar } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { IconButton } from "~/components/ui/icon-button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuPositioner,
  MenuTrigger,
} from "~/components/ui/menu";
import { Text } from "~/components/ui/text";
import { Member } from "~/types/index";
import { ChangeRoleModal } from "./change-role-modal";
import { RemoveMemberModal } from "./remove-member-modal";

export const MemberItem = (props: { member: Member }) => {
  const [openChangeRoleModal, setOpenChangeRoleModal] = useState(false);
  const [openRemoveMemberModal, setOpenRemoveMemberModal] = useState(false);

  const { member } = props;
  const { first_name, last_name, image, role, email, is_owner } = member;
  const name = `${first_name} ${last_name}`;

  return (
    <>
      <Flex w="100%" align="center" justify="space-between">
        <HStack gap={6}>
          <Avatar name={name} src={image ?? ""} />
          <Stack gap={1}>
            <Text textStyle="sm" fontWeight="bold">
              {name}
            </Text>
            <Text textStyle="sm" color="fg.subtle">
              {email}
            </Text>
          </Stack>
        </HStack>
        <HStack>
          <HStack>
            {is_owner && <Badge key={role}>owner</Badge>}
            <Badge key={role}>{role}</Badge>
          </HStack>
          <Menu>
            <MenuTrigger asChild>
              <IconButton size="xs" variant="ghost" aria-label="more">
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
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                  />
                </svg>
              </IconButton>
            </MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuItemGroup id="group-1">
                  <MenuItem
                    textStyle="xs"
                    id="change-role"
                    onClick={() => setOpenChangeRoleModal(true)}
                  >
                    Change role
                  </MenuItem>
                  <MenuItem
                    textStyle="xs"
                    id="remove-member"
                    onClick={() => setOpenRemoveMemberModal(true)}
                  >
                    Remove member
                  </MenuItem>
                </MenuItemGroup>
              </MenuContent>
            </MenuPositioner>
          </Menu>
        </HStack>
      </Flex>
      {openRemoveMemberModal && (
        <RemoveMemberModal
          member={member}
          open={openRemoveMemberModal}
          onOpenChange={(e: any) => setOpenRemoveMemberModal(e.open)}
        />
      )}
      {openChangeRoleModal && (
        <ChangeRoleModal
          member={member}
          open={openChangeRoleModal}
          onOpenChange={(e: any) => setOpenChangeRoleModal(e.open)}
        />
      )}
    </>
  );
};

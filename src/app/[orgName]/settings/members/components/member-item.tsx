"use client";

import React from "react";
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

export const MemberItem = () => {
  return (
    <Flex w="100%" align="center" justify="space-between">
      <HStack gap={6}>
        <Avatar size="xs" />
        <Stack gap={1}>
          <Text textStyle="sm" fontWeight="bold">
            Renata Alink
          </Text>
          <Text textStyle="sm" color="fg.muted">
            hello@saas-ui.dev
          </Text>
        </Stack>
      </HStack>
      <HStack>
        <HStack>
          <Badge>owner</Badge>
          <Badge>admin</Badge>
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
                <MenuItem textStyle="xs" id="change-role" onClick={console.log}>
                  Change role
                </MenuItem>
                <MenuItem textStyle="xs" id="remove-member">
                  Remove member
                </MenuItem>
              </MenuItemGroup>
            </MenuContent>
          </MenuPositioner>
        </Menu>
      </HStack>
    </Flex>
  );
};

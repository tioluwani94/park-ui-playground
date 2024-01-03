import React from "react";
import { HStack } from "styled-system/jsx/hstack";
import { Stack } from "styled-system/jsx/stack";
import { VStack } from "styled-system/jsx/vstack";
import { Card, CardBody } from "~/components/ui/card";
import * as Page from "../components/page";
import { InviteButton } from "./components/invite-button";
import { MemberItem } from "./components/member-item";
import { SearchInput } from "./components/search-input";
import { members } from "./data/index";

export default function SettingsMembersPage() {
  return (
    <Stack gap={8}>
      <Page.Header mb={10}>
        <Page.Title as="h1" fontSize="2xl">
          Members
        </Page.Title>
        <Page.Description textStyle="sm" color="fg.subtle">
          Manage who can access your organization
        </Page.Description>
      </Page.Header>
      <Page.Section title="Members" description="Invite your team">
        <Card width="100%">
          <CardBody py={3}>
            <VStack gap={6} w="100%" alignItems="flex-start">
              <HStack w="100%">
                <SearchInput placeholder="Filter by name and email" />
                <InviteButton />
              </HStack>
              <Stack w="100%" gap={8}>
                {members.map((m) => (
                  <MemberItem key={m.id} member={m} />
                ))}
              </Stack>
            </VStack>
          </CardBody>
        </Card>
      </Page.Section>
    </Stack>
  );
}

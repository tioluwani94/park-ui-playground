import React from "react";
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
    <Page.Container>
      <Page.Header>
        <Page.Title>Members</Page.Title>
        <Page.Description>
          Manage who can access your organization
        </Page.Description>
      </Page.Header>
      <Page.Section title="Members" description="Invite your team">
        <Card width="100%">
          <CardBody py={3}>
            <VStack gap={6} w="100%" alignItems="flex-start">
              <Stack w="100%" direction={["column", "row", "row"]}>
                <SearchInput placeholder="Filter by name and email" />
                <InviteButton />
              </Stack>
              <Stack w="100%" gap={8}>
                {members.map((m) => (
                  <MemberItem key={m.id} member={m} />
                ))}
              </Stack>
            </VStack>
          </CardBody>
        </Card>
      </Page.Section>
    </Page.Container>
  );
}

import React from "react";
import * as Page from "../components/page";
import { Box, Stack } from "styled-system/jsx";
import * as Table from "~/components/ui/table";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import * as ToggleGroup from "~/components/ui/toggle-group";
import { Heading } from "~/components/ui/heading";

const SettingsPlansPage = () => {
  return (
    <Page.Container>
      <Page.Header>
        <Page.Title>Billing Plans</Page.Title>
        <Page.Description>
          You are currently on the Professional plan
        </Page.Description>
      </Page.Header>
      <Box m="0 auto" minH="100%" h="1px">
        <Stack pb={16} align="stretch">
          <Box>
            <Table.Root>
              <Table.Head>
                <Table.Row borderBottomWidth={0}>
                  <Table.Cell px={6} py={4} rowSpan={2} verticalAlign="bottom">
                    <Stack align="flex-start">
                      <Text textStyle="xs" fontWeight={500}>
                        Billing period
                      </Text>
                      <ToggleGroup.Root size="sm">
                        <ToggleGroup.Item
                          px="3"
                          value="monthly"
                          aria-label="Toggle monthly"
                        >
                          Pay monthly
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                          px="3"
                          value="yearly"
                          aria-label="Toggle yearly"
                        >
                          Pay yearly
                        </ToggleGroup.Item>
                      </ToggleGroup.Root>
                    </Stack>
                  </Table.Cell>
                  <Table.Header py={3} px={6}>
                    <Stack>
                      <Heading fontWeight="semibold">Professional</Heading>
                      <Text textStyle="xs">Perfect for small teams.</Text>
                    </Stack>
                  </Table.Header>
                  <Table.Header py={3} px={6}>
                    <Stack>
                      <Heading fontWeight="semibold">Enterprise</Heading>
                      <Text textStyle="xs">
                        Complete package for growing teams.
                      </Text>
                    </Stack>
                  </Table.Header>
                </Table.Row>
                <Table.Row>
                  <Table.Header py={3} px={6}>
                    <Stack>
                      <Stack direction="row" align="center">
                        <Heading fontWeight="semibold">$50</Heading>
                        <Text textStyle="xs">per user/month</Text>
                      </Stack>
                      <Button size="xs" disabled>
                        Current plan
                      </Button>
                    </Stack>
                  </Table.Header>
                  <Table.Header py={3} px={6}>
                    <Stack>
                      <Stack direction="row" align="center">
                        <Heading fontWeight="semibold">$100</Heading>
                        <Text textStyle="xs">per user/month</Text>
                      </Stack>
                      <Button size="xs">Upgrade</Button>
                    </Stack>
                  </Table.Header>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell px={6}>Users</Table.Cell>
                  <Table.Cell px={6}>Max 3</Table.Cell>
                  <Table.Cell px={6}>Unlimited</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell px={6}>Inbox</Table.Cell>
                  <Table.Cell px={6}>Max 3</Table.Cell>
                  <Table.Cell px={6}>Unlimited</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Stack>
      </Box>
    </Page.Container>
  );
};

export default SettingsPlansPage;

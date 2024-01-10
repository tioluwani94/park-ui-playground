import React from "react";
import * as Page from "../components/page";
import { Box, Stack } from "styled-system/jsx";
import * as Table from "~/components/ui/table";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import * as ToggleGroup from "~/components/ui/toggle-group";
import { Heading } from "~/components/ui/heading";
import { Icon } from "~/components/ui/icon";

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
                <Table.Row _hover={{ bg: "transparent" }} borderBottomWidth={0}>
                  <Table.Cell px={6} py={3} rowSpan={2} verticalAlign="bottom">
                    <Stack align="flex-start">
                      <Text textStyle="sm" fontWeight={500}>
                        Billing period
                      </Text>
                      <ToggleGroup.Root size="sm" defaultValue={["monthly"]}>
                        <ToggleGroup.Item
                          h={8}
                          px={3}
                          value="monthly"
                          aria-label="Toggle monthly"
                        >
                          Pay monthly
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                          h={8}
                          px={3}
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
                      <Text textStyle="sm">Perfect for small teams.</Text>
                    </Stack>
                  </Table.Header>
                  <Table.Header py={3} px={6}>
                    <Stack>
                      <Heading fontWeight="semibold">Enterprise</Heading>
                      <Text textStyle="sm">
                        Complete package for growing teams.
                      </Text>
                    </Stack>
                  </Table.Header>
                </Table.Row>
                <Table.Row _hover={{ bg: "transparent" }}>
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
                <Table.Row textStyle="sm">
                  <Table.Cell px={6}>
                    <Text fontWeight={500}>Users</Text>
                  </Table.Cell>
                  <Table.Cell px={6}>
                    <Stack gap={1} direction="row" align="center">
                      <Icon css={{ w: 4, h: 4, color: "purple.8" }}>
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
                      </Icon>
                      <Text fontWeight={500}>Max 3</Text>
                    </Stack>
                  </Table.Cell>
                  <Table.Cell px={6}>
                    <Stack gap={1} direction="row" align="center">
                      <Icon css={{ w: 4, h: 4, color: "purple.8" }}>
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
                      </Icon>
                      <Text fontWeight={500}>Unlimited</Text>
                    </Stack>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textStyle="sm">
                  <Table.Cell px={6}>
                    <Text fontWeight={500}>Inbox</Text>
                  </Table.Cell>
                  <Table.Cell px={6}>
                    <Stack gap={1} direction="row" align="center">
                      <Icon css={{ w: 4, h: 4, color: "purple.8" }}>
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
                      </Icon>
                    </Stack>
                  </Table.Cell>
                  <Table.Cell px={6}>
                    <Stack gap={1} direction="row" align="center">
                      <Icon css={{ w: 4, h: 4, color: "purple.8" }}>
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
                      </Icon>
                    </Stack>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textStyle="sm">
                  <Table.Cell px={6}>
                    <Text fontWeight={500}>Contacts</Text>
                  </Table.Cell>
                  <Table.Cell px={6}>
                    <Stack gap={1} direction="row" align="center">
                      <Icon css={{ w: 4, h: 4, color: "purple.8" }}>
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
                      </Icon>
                    </Stack>
                  </Table.Cell>
                  <Table.Cell px={6}>
                    <Stack gap={1} direction="row" align="center">
                      <Icon css={{ w: 4, h: 4, color: "purple.8" }}>
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
                      </Icon>
                    </Stack>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textStyle="sm">
                  <Table.Cell px={6}>
                    <Text fontWeight={500}>Support</Text>
                  </Table.Cell>
                  <Table.Cell px={6}>
                    <Stack gap={1} direction="row" align="center">
                      <Icon css={{ w: 4, h: 4, color: "purple.8" }}>
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
                      </Icon>
                    </Stack>
                  </Table.Cell>
                  <Table.Cell px={6}>
                    <Stack gap={1} direction="row" align="center">
                      <Icon css={{ w: 4, h: 4, color: "purple.8" }}>
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
                      </Icon>
                    </Stack>
                  </Table.Cell>
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

import React from "react";
import { HStack } from "styled-system/jsx/hstack";
import { Stack } from "styled-system/jsx/stack";
import { VStack } from "styled-system/jsx/vstack";
import * as Page from "~/components/settings/page";
import { Button } from "~/components/ui/button";
import { Card, CardBody } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";

const SettingsBillingPage = () => {
  const handleSaveBillingEmailDetails = async () => {
    "use server";
  };

  return (
    <Stack gap={8}>
      <Page.Header mb={10}>
        <Page.Title as="h1" fontSize="2xl">
          Billing
        </Page.Title>
        <Page.Description textStyle="sm" color="fg.subtle">
          Manage your billing information and invoices
        </Page.Description>
      </Page.Header>
      <Stack gap={20} divideColor="gray.100">
        <HStack
          pb={20}
          gap={10}
          borderBottomWidth="1px"
          alignItems="flex-start"
        >
          <Page.Header maxW="200px" w="100%">
            <Page.SectionTitle>Billing plan</Page.SectionTitle>
            <Page.Description textStyle="sm" color="fg.subtle">
              Update your billing plan.
            </Page.Description>
          </Page.Header>
          <HStack flex={1}>
            <Card width="100%">
              <CardBody py={3}>
                <VStack w="100%" alignItems="flex-start">
                  <Text textStyle="sm">
                    You are currently on the <strong>Professional</strong> plan.
                  </Text>
                  <Text textStyle="sm">Your trial ends 1/15/2024.</Text>
                  <Button size="xs">View plans and upgrade</Button>
                </VStack>
              </CardBody>
            </Card>
          </HStack>
        </HStack>
        <HStack
          pb={20}
          gap={10}
          borderBottomWidth="1px"
          alignItems="flex-start"
        >
          <Page.Header maxW="200px" w="100%">
            <Page.SectionTitle>Billing email</Page.SectionTitle>
            <Page.Description textStyle="sm" color="fg.subtle">
              Send invoices to an alternative address.
            </Page.Description>
          </Page.Header>
          <HStack flex={1}>
            <Card width="100%">
              <CardBody py={3}>
                <VStack w="100%" alignItems="flex-start">
                  <form
                    style={{ width: "inherit" }}
                    action={handleSaveBillingEmailDetails}
                  >
                    <VStack w="100%" gap={4} alignItems="flex-start">
                      <VStack gap={1} w="100%" alignItems="flex-start">
                        <Label textStyle="sm" htmlFor="email">
                          Email address
                        </Label>
                        <Input size="sm" id="email" name="email" type="email" />
                      </VStack>
                      <Button size="xs" type="submit">
                        Save
                      </Button>
                    </VStack>
                  </form>
                </VStack>
              </CardBody>
            </Card>
          </HStack>
        </HStack>
        <HStack
          pb={20}
          gap={10}
          borderBottomWidth="1px"
          alignItems="flex-start"
        >
          <Page.Header maxW="200px" w="100%">
            <Page.SectionTitle>Invoices</Page.SectionTitle>
            <Page.Description textStyle="sm" color="fg.subtle">
              Invoices are sent on the first of every month.
            </Page.Description>
          </Page.Header>
          <HStack flex={1}>
            <Card width="100%">
              <CardBody py={3}>
                <VStack w="100%" alignItems="flex-start">
                  <Text textStyle="sm">No invoices received yet.</Text>
                </VStack>
              </CardBody>
            </Card>
          </HStack>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default SettingsBillingPage;

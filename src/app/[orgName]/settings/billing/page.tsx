import { redirect } from "next/navigation";
import React from "react";
import { Divider } from "styled-system/jsx/divider";
import { VStack } from "styled-system/jsx/vstack";
import { Button } from "~/components/ui/button";
import { Card, CardBody } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import * as Page from "../components/page";

const SettingsBillingPage = () => {
  const handleViewPlans = async () => {
    "use server";
    redirect("/t/settings/plans");
  };

  const handleSaveBillingEmailDetails = async () => {
    "use server";
  };

  return (
    <Page.Container>
      <Page.Header>
        <Page.Title>Billing</Page.Title>
        <Page.Description>
          Manage your billing information and invoices
        </Page.Description>
      </Page.Header>
      <Page.Section title="Billing plan" description="Update your billing plan">
        <Card width="100%">
          <CardBody py={3}>
            <VStack w="100%" alignItems="flex-start">
              <Text textStyle="sm">
                You are currently on the <strong>Professional</strong> plan.
              </Text>
              <Text textStyle="sm">Your trial ends 1/15/2024.</Text>
              <form action={handleViewPlans}>
                <Button type="submit" size="xs">
                  View plans and upgrade
                </Button>
              </form>
            </VStack>
          </CardBody>
        </Card>
      </Page.Section>
      <Divider />
      <Page.Section
        title="Billing email"
        description="Send invoices to an alternative address"
      >
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
                    <Input size="xs" id="email" name="email" type="email" />
                  </VStack>
                  <Button size="xs" type="submit">
                    Save
                  </Button>
                </VStack>
              </form>
            </VStack>
          </CardBody>
        </Card>
      </Page.Section>
      <Divider />
      <Page.Section
        title="Invoices"
        description="Invoices are sent on the first of every month"
      >
        <Card width="100%">
          <CardBody py={3}>
            <VStack w="100%" alignItems="flex-start">
              <Text textStyle="sm">No invoices received yet.</Text>
            </VStack>
          </CardBody>
        </Card>
      </Page.Section>
    </Page.Container>
  );
};

export default SettingsBillingPage;

import React from "react";
import { VStack } from "styled-system/jsx/vstack";
import { Button } from "~/components/ui/button";
import { Card, CardBody } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import * as Page from "../components/page";

export default function SettingsOrganizationPage() {
  const handleSaveDetails = async (formData: FormData) => {
    "use server";
    const payload = Object.fromEntries(formData.entries());
    console.log(payload);
  };

  return (
    <Page.Container>
      <Page.Header>
        <Page.Title>Organization</Page.Title>
        <Page.Description>Manage your organization settings</Page.Description>
      </Page.Header>
      <Page.Section
        title="Organization details"
        description="Basic details about your organization"
      >
        <Card width="100%">
          <CardBody py={3}>
            <VStack w="100%" alignItems="flex-start">
              <form action={handleSaveDetails} style={{ width: "inherit" }}>
                <VStack w="100%" gap={4} alignItems="flex-start">
                  <VStack gap={1} w="100%" alignItems="flex-start">
                    <Label textStyle="sm" htmlFor="name">
                      Organization name
                    </Label>
                    <Input size="sm" id="name" name="name" type="text" />
                  </VStack>
                  <VStack gap={1} w="100%" alignItems="flex-start">
                    <Label textStyle="sm" htmlFor="email">
                      Email address
                    </Label>
                    <Input
                      size="xs"
                      disabled
                      id="email"
                      name="email"
                      type="email"
                    />
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
    </Page.Container>
  );
}

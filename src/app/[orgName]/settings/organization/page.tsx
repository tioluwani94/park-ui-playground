import React from "react";
import { HStack } from "styled-system/jsx/hstack";
import { Stack } from "styled-system/jsx/stack";
import { VStack } from "styled-system/jsx/vstack";
import * as Page from "~/components/settings/page";
import { Button } from "~/components/ui/button";
import { Card, CardBody } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function SettingsOrganizationPage() {
  const handleSaveDetails = async (formData: FormData) => {
    "use server";
    const payload = Object.fromEntries(formData.entries());
    console.log(payload);
  };

  return (
    <Stack gap={8}>
      <Page.Header mb={10}>
        <Page.Title as="h1" fontSize="2xl">
          Organization
        </Page.Title>
        <Page.Description textStyle="sm" color="fg.subtle">
          Manage your organization settings
        </Page.Description>
      </Page.Header>
      <HStack gap={10} alignItems="flex-start">
        <Page.Header>
          <Page.SectionTitle>Organization details</Page.SectionTitle>
          <Page.Description textStyle="sm" color="fg.subtle">
            Basic details about your organization.
          </Page.Description>
        </Page.Header>
        <HStack flex={1}>
          <Card width="100%">
            <CardBody py={3}>
              <VStack w="100%" alignItems="flex-start">
                <form action={handleSaveDetails} style={{ width: "inherit" }}>
                  <VStack w="100%" gap={6} alignItems="flex-start">
                    <VStack gap={1} w="100%" alignItems="flex-start">
                      <Label htmlFor="name">Organization name</Label>
                      <Input size="sm" id="name" name="name" type="text" />
                    </VStack>
                    <VStack gap={1} w="100%" alignItems="flex-start">
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        size="sm"
                        disabled
                        id="email"
                        name="email"
                        type="email"
                      />
                    </VStack>
                    <Button type="submit">Save</Button>
                  </VStack>
                </form>
              </VStack>
            </CardBody>
          </Card>
        </HStack>
      </HStack>
    </Stack>
  );
}

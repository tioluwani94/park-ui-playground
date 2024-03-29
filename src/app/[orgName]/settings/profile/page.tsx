import React from "react";
import { VStack } from "styled-system/jsx/vstack";
import { Button } from "~/components/ui/button";
import { Card, CardBody } from "~/components/ui/card";
import * as FileUpload from "~/components/ui/file-upload";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import * as Page from "../components/page";

export default function SettingsProfilePage() {
  const handleSaveDetails = async (formData: FormData) => {
    "use server";
    const payload = Object.fromEntries(formData.entries());
    console.log(payload);
  };

  return (
    <Page.Container>
      <Page.Header>
        <Page.Title>Profile</Page.Title>
        <Page.Description>Manage your profile</Page.Description>
      </Page.Header>
      <Page.Section
        title="Basic details"
        description="Update your personal information"
      >
        <Card width="100%">
          <CardBody py={3}>
            <VStack w="100%" alignItems="flex-start">
              <VStack w="100%" alignItems="flex-start">
                <Label textStyle="sm" htmlFor="profile_image">
                  Profile image
                </Label>
                <FileUpload.Root
                  id="profile_image"
                  maxFiles={1}
                  accept="image/*"
                >
                  <FileUpload.Dropzone>
                    <FileUpload.Label>
                      Drop your profile image here
                    </FileUpload.Label>
                    <FileUpload.Trigger asChild>
                      <Button size="sm">Upload profile Image</Button>
                    </FileUpload.Trigger>
                  </FileUpload.Dropzone>
                </FileUpload.Root>
              </VStack>
              <form action={handleSaveDetails} style={{ width: "inherit" }}>
                <VStack w="100%" gap={4} alignItems="flex-start">
                  <VStack gap={1} w="100%" alignItems="flex-start">
                    <Label textStyle="sm" htmlFor="first_name">
                      First name
                    </Label>
                    <Input
                      size="xs"
                      type="text"
                      id="first_name"
                      name="first_name"
                    />
                  </VStack>
                  <VStack gap={1} w="100%" alignItems="flex-start">
                    <Label textStyle="sm" htmlFor="last_name">
                      Last name
                    </Label>
                    <Input
                      size="xs"
                      type="text"
                      id="last_name"
                      name="last_name"
                    />
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

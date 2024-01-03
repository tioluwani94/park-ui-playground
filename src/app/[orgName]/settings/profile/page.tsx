import React from "react";
import { HStack } from "styled-system/jsx/hstack";
import { Stack } from "styled-system/jsx/stack";
import { VStack } from "styled-system/jsx/vstack";
import * as Page from "../components/page";
import { Button } from "~/components/ui/button";
import { Card, CardBody } from "~/components/ui/card";
import * as FileUpload from "~/components/ui/file-upload";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function SettingsProfilePage() {
  const handleSaveDetails = async (formData: FormData) => {
    "use server";
    const payload = Object.fromEntries(formData.entries());
    console.log(payload);
  };

  return (
    <Stack gap={8}>
      <Page.Header mb={10}>
        <Page.Title as="h1" fontSize="2xl">
          Profile
        </Page.Title>
        <Page.Description textStyle="sm" color="fg.subtle">
          Manage your profile
        </Page.Description>
      </Page.Header>
      <HStack gap={10} alignItems="flex-start">
        <Page.Header>
          <Page.SectionTitle>Basic details</Page.SectionTitle>
          <Page.Description textStyle="sm" color="fg.subtle">
            Update your personal information.
          </Page.Description>
        </Page.Header>
        <HStack flex={1}>
          <Card width="100%">
            <CardBody py={3}>
              <VStack w="100%" alignItems="flex-start">
                <VStack w="100%" alignItems="flex-start">
                  <Label htmlFor="profile_image">Profile image</Label>
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
                        size="sm"
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
                        size="sm"
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
                        size="sm"
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
        </HStack>
      </HStack>
    </Stack>
  );
}

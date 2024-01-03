import React from "react";
import { Stack } from "styled-system/jsx/stack";
import * as Page from "../components/page";

const SettingsNotificationsPage = () => {
  return (
    <Stack gap={8}>
      <Page.Header mb={10}>
        <Page.Title as="h1" fontSize="2xl">
          Notifications
        </Page.Title>
        <Page.Description textStyle="sm" color="fg.subtle">
          Manage how and where you want to be notified
        </Page.Description>
      </Page.Header>
    </Stack>
  );
};

export default SettingsNotificationsPage;

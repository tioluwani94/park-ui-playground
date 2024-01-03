import React from "react";
import { Stack } from "styled-system/jsx/stack";
import * as Page from "../components/page";

const SettingsPlansPage = () => {
  return (
    <Stack gap={8}>
      <Page.Header mb={10}>
        <Page.Title as="h1" fontSize="2xl">
          Billing Plans
        </Page.Title>
        <Page.Description textStyle="sm" color="fg.subtle">
          You are currently on the Professional plan
        </Page.Description>
      </Page.Header>
    </Stack>
  );
};

export default SettingsPlansPage;

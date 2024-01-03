import React from "react";
import * as Page from "../components/page";

const SettingsPlansPage = () => {
  return (
    <Page.Container>
      <Page.Header>
        <Page.Title>Billing Plans</Page.Title>
        <Page.Description>
          You are currently on the Professional plan
        </Page.Description>
      </Page.Header>
    </Page.Container>
  );
};

export default SettingsPlansPage;

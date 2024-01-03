import React, { Fragment } from "react";
import { Box } from "styled-system/jsx/box";
import { Divider } from "styled-system/jsx/divider";
import { Stack } from "styled-system/jsx/stack";
import { Card, CardBody } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import * as Page from "../components/page";
import { NotificationControl } from "./components/notification-control";
import { notification_topics, notification_topics_labels } from "./data/index";

const SettingsNotificationsPage = () => {
  const topics = Object.keys(notification_topics);
  return (
    <Page.Container>
      <Page.Header>
        <Page.Title>Notifications</Page.Title>
        <Page.Description>
          Manage how and where you want to be notified
        </Page.Description>
      </Page.Header>
      <Page.Section
        title="Notification channels"
        description="Where can we notify you?"
      >
        <Card width="100%">
          <CardBody px={0} py={3}>
            <Stack gap={3}>
              <Box px={6}>
                <NotificationControl
                  title="Email"
                  description="Receive a daily email digest"
                />
              </Box>
              <Divider />
              <Box px={6}>
                <NotificationControl
                  title="Desktop"
                  description="Receive desktop notifications"
                />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Page.Section>
      <Divider />
      <Page.Section title="Notification topics" description="Notify me when...">
        <Card width="100%">
          <CardBody px={0} py={3}>
            <Stack gap={6}>
              {topics.map((v, index) => (
                <Fragment key={v}>
                  <Stack gap={6} px={6}>
                    <Text fontWeight="semibold" textTransform="capitalize">
                      {v}
                    </Text>
                    <Stack gap={4}>
                      {Object.keys(notification_topics[v]).map((w) => {
                        return (
                          <NotificationControl
                            key={w}
                            title={notification_topics_labels[w]}
                            defaultChecked={notification_topics[v][w]}
                          />
                        );
                      })}
                    </Stack>
                  </Stack>
                  {index !== topics.length - 1 && <Divider />}
                </Fragment>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </Page.Section>
    </Page.Container>
  );
};

export default SettingsNotificationsPage;

"use client";

import React from "react";
import { Flex } from "styled-system/jsx/flex";
import { Stack } from "styled-system/jsx/stack";
import { Switch, SwitchProps } from "~/components/ui/switch";
import { Text } from "~/components/ui/text";

export const NotificationControl = (
  props: SwitchProps & { title: string; description?: string }
) => {
  const { title, description, ...rest } = props;
  return (
    <Flex w="100%" align="center" justify="space-between">
      <Stack gap={1} flex={1}>
        <Text textStyle="sm" fontWeight="medium">
          {title}
        </Text>
        {description && (
          <Text textStyle="xs" color="fg.subtle">
            {description}
          </Text>
        )}
      </Stack>
      <Switch {...rest} />
    </Flex>
  );
};

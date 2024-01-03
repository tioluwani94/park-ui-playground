"use client";

import React from "react";
import { Stack } from "styled-system/jsx/stack";
import { Button } from "~/components/ui/button";
import { DialogCloseTrigger, DialogProps } from "~/components/ui/dialog";
import { Modal, ModalFooter } from "~/components/ui/modal";
import { Text } from "~/components/ui/text";
import { Member } from "~/types/index";

export const RemoveMemberModal = (props: DialogProps & { member: Member }) => {
  const { member, ...rest } = props;
  const name = `${member.first_name} ${member.last_name}`;

  return (
    <Modal title="Remove member" {...rest}>
      <Stack>
        <Text textStyle="sm">Are you sure you want to remove {name}?</Text>
      </Stack>
      <ModalFooter>
        <DialogCloseTrigger asChild>
          <Button size="xs" variant="ghost">
            Cancel
          </Button>
        </DialogCloseTrigger>
        <Button size="xs" colorPalette="red">
          Remove
        </Button>
      </ModalFooter>
    </Modal>
  );
};

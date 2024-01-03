import React from "react";
import { Stack } from "styled-system/jsx/stack";
import { Button } from "~/components/ui/button";
import { DialogCloseTrigger, DialogProps } from "~/components/ui/dialog";
import { Modal, ModalFooter } from "~/components/ui/modal";
import { Text } from "~/components/ui/text";

export const RemoveMemberModal = (props: DialogProps) => {
  return (
    <Modal title="Remove member" {...props}>
      <Stack>
        <Text textStyle="sm">Are you sure you want to remove this member?</Text>
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

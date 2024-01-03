import React from "react";
import { Button } from "~/components/ui/button";
import { DialogCloseTrigger, DialogProps } from "~/components/ui/dialog";
import { Modal, ModalFooter } from "~/components/ui/modal";
import * as RadioGroup from "~/components/ui/radio-group";
import { Member } from "~/types/index";
import { roles } from "../data/index";

export const ChangeRoleModal = (props: DialogProps & { member: Member }) => {
  const { member, ...rest } = props;
  return (
    <Modal title="Update roles" {...rest}>
      <RadioGroup.Root gap={6} size="sm" defaultValue={member.role} {...props}>
        {roles.map((option) => (
          <RadioGroup.Item key={option.value} value={option.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
      <ModalFooter>
        <DialogCloseTrigger asChild>
          <Button size="xs" variant="ghost">
            Cancel
          </Button>
        </DialogCloseTrigger>
        <Button size="xs">Update</Button>
      </ModalFooter>
    </Modal>
  );
};

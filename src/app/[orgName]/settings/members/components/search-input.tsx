"use client";

import React from "react";
import { Box } from "styled-system/jsx/box";
import { Icon } from "~/components/ui/icon";
import { Input, InputProps } from "~/components/ui/input";

export const SearchInput = (props: InputProps) => {
  return (
    <Box w="100%" position="relative">
      <Icon
        css={{
          w: "16px",
          h: "16px",
          top: "8px",
          left: "8px",
          position: "absolute",
        }}
      >
        <svg
          fill="none"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </Icon>
      <Input pl="32px" size="xs" type="search" {...props} />
    </Box>
  );
};

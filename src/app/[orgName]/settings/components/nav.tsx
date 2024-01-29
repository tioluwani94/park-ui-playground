"use client";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";
import {
  Flex,
  HStack,
  Stack,
  StackProps,
  VStack,
  VstackProps,
} from "styled-system/jsx";
import { ColorModeButton } from "~/components/ui/color-mode-button";
import * as Drawer from "~/components/ui/drawer";
import { Heading } from "~/components/ui/heading";
import { Icon } from "~/components/ui/icon";
import { IconButton } from "~/components/ui/icon-button";
import { Link, LinkProps } from "~/components/ui/link";
import { Text } from "~/components/ui/text";

const NavHeader = () => {
  const { back } = useRouter();

  return (
    <Flex px={3} w="100%" justify="space-between" align="center">
      <HStack alignItems="center">
        <IconButton size="xs" variant="ghost" onClick={back}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </IconButton>
        <Heading as="h1" fontWeight="bold">
          Settings
        </Heading>
      </HStack>
      <ColorModeButton />
    </Flex>
  );
};

const NavSection = (props: VstackProps) => (
  <VStack px={3} alignItems="flex-start" {...props} />
);

const NavSectionHeader = ({
  label,
  icon,
}: {
  label: string;
  icon?: ReactNode;
}) => {
  return (
    <HStack w="100%" px={3} alignItems="center" justify="flex-start">
      {icon && <>{icon}</>}
      <Text fontWeight="medium" textStyle="xs" color="fg.subtle">
        {label}
      </Text>
    </HStack>
  );
};

const NavList = (props: VstackProps) => {
  return <VStack gap={1} w="100%" alignItems="flex-start" {...props} />;
};

const NavListItem = (props: Omit<LinkProps, "href"> & NextLinkProps) => {
  const { href, children, ...rest } = props;

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      h={8}
      pr={3}
      pl={8}
      asChild
      w="100%"
      rounded={4}
      textStyle="sm"
      fontWeight="normal"
      textDecoration="none"
      transition="background 0.4s ease"
      _hover={{
        bg: "colorPalette.a3",
      }}
      bg={isActive ? "colorPalette.a3" : "transparent"}
      {...rest}
    >
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
};

const NavContainer = (props: StackProps) => (
  <Stack
    py={3}
    gap={6}
    w="100%"
    maxW="260px"
    bg="bg.subtle"
    borderRightWidth="1px"
    {...props}
  />
);

const NavMobile = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <IconButton variant="outline" size="xs" onClick={() => setIsOpen(true)}>
        <Icon css={{ w: "16px", h: "16px" }}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Icon>
      </IconButton>
      <Drawer.Root
        variant="left"
        open={isOpen}
        onOpenChange={(e) => setIsOpen(e.open)}
      >
        <Drawer.Backdrop />
        <Drawer.Positioner maxW="260px" left={0}>
          <Drawer.Content>
            <Drawer.Body p={0}>
              <Flex px={6} bg="bg.subtle" align="center" h="60px">
                <IconButton
                  size="xs"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon css={{ w: "16px", h: "16px" }}>
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </Icon>
                </IconButton>
              </Flex>
              {children}
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};

const NavContent = () => {
  return (
    <>
      <NavHeader />
      <NavSection>
        <NavSectionHeader
          label="Team"
          icon={
            <Icon css={{ w: "16px", h: "16px", color: "fg.muted" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
            </Icon>
          }
        />
        <NavList>
          <NavListItem href={`/settings`}>Overview</NavListItem>
          <NavListItem href={`/settings/team`}>Team</NavListItem>
          <NavListItem href={`/settings/members`}>Members</NavListItem>
          <NavListItem href={`/settings/plans`}>Plans</NavListItem>
          <NavListItem href={`/settings/billing`}>Billing</NavListItem>
        </NavList>
      </NavSection>
      <NavSection>
        <NavSectionHeader
          label="Account"
          icon={
            <Icon css={{ w: "16px", h: "16px", color: "fg.muted" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Icon>
          }
        />
        <NavList>
          <NavListItem href={`/settings/profile`}>Profile</NavListItem>
          <NavListItem href={`/settings/notifications`}>
            Notifications
          </NavListItem>
        </NavList>
      </NavSection>
    </>
  );
};

const List = NavList;
const Item = NavListItem;
const Header = NavHeader;
const Mobile = NavMobile;
const Section = NavSection;
const Content = NavContent;
const Container = NavContainer;
const SectionHeader = NavSectionHeader;

export {
  Container,
  Header,
  Item,
  List,
  Mobile,
  Section,
  SectionHeader,
  Content,
};

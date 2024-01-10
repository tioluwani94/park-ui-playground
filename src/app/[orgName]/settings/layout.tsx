import { ReactNode } from "react";
import { Container, Flex } from "styled-system/jsx";
import * as Nav from "~/app/[orgName]/settings/components/nav";
import { Icon } from "~/components/ui/alert";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <Flex h="100vh">
      <Nav.Container display={["none", "none", "flex"]}>
        <Nav.Header />
        <Nav.Section>
          <Nav.SectionHeader
            label="Organization"
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
          <Nav.List>
            <Nav.Item href="/t/settings">Overview</Nav.Item>
            <Nav.Item href="/t/settings/organization">Organization</Nav.Item>
            <Nav.Item href="/t/settings/members">Members</Nav.Item>
            <Nav.Item href="/t/settings/plans">Plans</Nav.Item>
            <Nav.Item href="/t/settings/billing">Billing</Nav.Item>
          </Nav.List>
        </Nav.Section>
        <Nav.Section>
          <Nav.SectionHeader
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
          <Nav.List>
            <Nav.Item href="/t/settings/profile">Profile</Nav.Item>
            <Nav.Item href="/t/settings/notifications">Notifications</Nav.Item>
          </Nav.List>
        </Nav.Section>
      </Nav.Container>
      <Flex flex={1} direction="column">
        <Flex
          px={6}
          w="100%"
          h="60px"
          minH="60px"
          align="center"
          borderBottomWidth="1px"
          display={["flex", "flex", "none"]}
        >
          <Nav.Mobile>
            <Nav.Container h="100%">
              <Nav.Header />
              <Nav.Section>
                <Nav.SectionHeader
                  label="Organization"
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
                <Nav.List>
                  <Nav.Item href="/t/settings">Overview</Nav.Item>
                  <Nav.Item href="/t/settings/organization">
                    Organization
                  </Nav.Item>
                  <Nav.Item href="/t/settings/members">Members</Nav.Item>
                  <Nav.Item href="/t/settings/plans">Plans</Nav.Item>
                  <Nav.Item href="/t/settings/billing">Billing</Nav.Item>
                </Nav.List>
              </Nav.Section>
              <Nav.Section>
                <Nav.SectionHeader
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
                <Nav.List>
                  <Nav.Item href="/t/settings/profile">Profile</Nav.Item>
                  <Nav.Item href="/t/settings/notifications">
                    Notifications
                  </Nav.Item>
                </Nav.List>
              </Nav.Section>
            </Nav.Container>
          </Nav.Mobile>
        </Flex>
        <Container w="100%" maxW="4xl" py={8} flex={1}>
          {children}
        </Container>
      </Flex>
    </Flex>
  );
}

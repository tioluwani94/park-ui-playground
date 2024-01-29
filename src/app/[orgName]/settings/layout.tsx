import { ReactNode } from "react";
import { Container, Flex } from "styled-system/jsx";
import * as Nav from "~/app/[orgName]/settings/components/nav";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <Flex h="100vh">
      <Nav.Container display={["none", "none", "flex"]}>
        <Nav.Content />
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
            <Nav.Container h="100%" borderRightWidth="0">
              <Nav.Content />
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

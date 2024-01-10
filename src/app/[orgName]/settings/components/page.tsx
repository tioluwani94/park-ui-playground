import { ReactNode } from "react";
import { HStack } from "styled-system/jsx/hstack";
import { Stack, StackProps } from "styled-system/jsx/stack";
import { Heading, HeadingProps } from "~/components/ui/heading";
import { Text, TextProps } from "~/components/ui/text";

const PageHeader = (props: StackProps) => <Stack gap={1} {...props} />;

const PageDescription = (props: TextProps) => (
  <Text textStyle="sm" color="fg.subtle" {...props} />
);

const PageTitle = (props: HeadingProps) => (
  <Heading as="h1" fontSize="2xl" {...props} />
);

const PageSectionTitle = (props: HeadingProps) => (
  <Heading as="h2" {...props} />
);

const PageSection = ({
  title,
  description,
  children,
  ...rest
}: {
  title: string;
  description: string;
  children: ReactNode;
} & StackProps) => (
  <Stack
    gap={10}
    alignItems="flex-start"
    direction={["column", "column", "row"]}
    {...rest}
  >
    <Header w="full" maxW={["unset", "unset", "200px"]}>
      <SectionTitle>{title}</SectionTitle>
      <Description textStyle="sm" color="fg.subtle">
        {description}
      </Description>
    </Header>
    <HStack w="full" flex={1}>
      {children}
    </HStack>
  </Stack>
);

const PageContainer = (props: StackProps) => <Stack gap={16} {...props} />;

const Title = PageTitle;
const Header = PageHeader;
const Section = PageSection;
const Container = PageContainer;
const Description = PageDescription;
const SectionTitle = PageSectionTitle;

export { Title, Header, Description, Section, Container, SectionTitle };

import { ReactNode } from "react";
import { HStack, HstackProps } from "styled-system/jsx/hstack";
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
} & HstackProps) => (
  <HStack gap={10} alignItems="flex-start" {...rest}>
    <Header maxW="200px" w="100%">
      <SectionTitle>{title}</SectionTitle>
      <Description textStyle="sm" color="fg.subtle">
        {description}
      </Description>
    </Header>
    <HStack flex={1}>{children}</HStack>
  </HStack>
);

const Title = PageTitle;
const Header = PageHeader;
const Section = PageSection;
const Description = PageDescription;
const SectionTitle = PageSectionTitle;

export { Title, Header, Description, Section, SectionTitle };

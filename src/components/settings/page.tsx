import { Stack, StackProps } from "styled-system/jsx/stack";
import { Heading, HeadingProps } from "../ui/heading";
import { Text, TextProps } from "../ui/text";

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

const Title = PageTitle;
const Header = PageHeader;
const Description = PageDescription;
const SectionTitle = PageSectionTitle;

export { Title, Header, Description, SectionTitle };

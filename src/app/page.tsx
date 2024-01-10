import { redirect } from "next/navigation";
import { Container, Flex, Stack } from "styled-system/jsx";
import { Button } from "~/components/ui/button";

export default async function Home() {
  const handleLogin = async () => {
    "use server";
    redirect("/auth/login");
  };

  const handleSignup = async () => {
    "use server";
    redirect("/auth/signup");
  };

  return (
    <Flex align="center" justify="center" w="100%" h="100vh">
      <Container w="100%" maxW="640px">
        <Stack>
          <form action={handleSignup}>
            <Button w="full" type="submit">
              Signup
            </Button>
          </form>
          <form action={handleLogin}>
            <Button w="full" type="submit" variant="outline">
              Login
            </Button>
          </form>
        </Stack>
      </Container>
    </Flex>
  );
}

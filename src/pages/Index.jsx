import { Box, Container, Flex, Heading, Link, Spacer, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" margin="0 1rem">
            Home
          </Link>
          <Link as={RouterLink} to="/about" margin="0 1rem">
            About
          </Link>
        </Box>
      </Flex>
      <Container maxW="container.md" centerContent>
        <VStack spacing={4} mt={10}>
          <Heading>Welcome to MyApp</Heading>
          <Box>
            <Heading size="md">Main Content Area</Heading>
            <p>This is where your main content will go.</p>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
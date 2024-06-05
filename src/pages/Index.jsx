import { Box, Container, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        p={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Flex>
          <Text mx={2}>
            <Link to="/">Home</Link>
          </Text>
          <Text mx={2}>
            <Link to="/about">About</Link>
          </Text>
        </Flex>
      </Flex>
      <Box
        as="main"
        p={4}
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={isMobile ? "auto" : "100vh"}
      >
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
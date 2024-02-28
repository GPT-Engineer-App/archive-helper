import React from "react";
import { Box, Button, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaArchive } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Welcome to the Internet Archive!</Heading>
        <Text mt={4}>Explore a vast collection of free books, movies, software, music, websites, and more.</Text>
      </Box>
      <Link href="https://archive.org" isExternal>
        <Button rightIcon={<FaArchive />} colorScheme="teal">
          Visit the Archive
        </Button>
      </Link>
    </VStack>
  );
};

export default Index;

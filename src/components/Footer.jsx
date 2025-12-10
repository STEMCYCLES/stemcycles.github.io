"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function Footer() {
  return (
    <Box bg="gray.800" color="white">
      <Container as={Stack} maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* About Column */}
          <Stack spacing={4}>
            <Heading size="md" color="brand.300">
              STEMCYCLES
            </Heading>
            <Text fontSize="sm" color="gray.400">
              Empowering the next generation through STEM education and
              mentorship.
            </Text>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={4}>
            <Heading size="md" color="brand.300">
              Quick Links
            </Heading>
            <Stack spacing={2}>
              <Link
                as={NextLink}
                href="/"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                Home
              </Link>
              <Link
                as={NextLink}
                href="/about"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                About
              </Link>
              <Link
                as={NextLink}
                href="/get-involved"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                Get Involved
              </Link>
            </Stack>
          </Stack>

          {/* Contact */}
          <Stack spacing={4}>
            <Heading size="md" color="brand.300">
              Contact Us
            </Heading>
            <HStack color="gray.400">
              <EmailIcon />
              <Link
                href="mailto:info@stemcycles.org"
                _hover={{ color: "white" }}
              >
                info@stemcycles.org
              </Link>
            </HStack>
            <Text fontSize="sm" color="gray.400">
              Follow us on social media for updates!
            </Text>
          </Stack>
        </SimpleGrid>

        {/* Copyright */}
        <Box pt={8} borderTopWidth={1} borderTopColor="gray.700" mt={8}>
          <Text textAlign="center" fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} STEMCYCLES. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

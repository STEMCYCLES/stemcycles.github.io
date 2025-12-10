"use client";

import {
  Heading,
  Text,
  VStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import AnimatedSection from "./AnimatedSection";
import { buildSvgPlaceholder } from "../../utils/placeholders";

/**
 * ProgramPageLayout - Reusable layout template for all program pages
 *
 * Provides consistent structure across Trinity Force, ByteForce, and Cultivation Camps pages
 *
 * @param {object} props
 * @param {string} props.title - Program name
 * @param {string} props.tagline - Brief program description
 * @param {string} props.logoLight - Logo for light mode
 * @param {string} props.logoDark - Logo for dark mode
 * @param {React.ReactNode} props.children - Content sections
 */
export default function ProgramPageLayout({
  title,
  tagline,
  logoLight,
  logoDark,
  children,
}) {
  const logoSrc = useColorModeValue(logoLight, logoDark);
  const headingColor = useColorModeValue("text.light", "text.dark");
  const subtitleColor = useColorModeValue("text.mutedLight", "text.mutedDark");
  const logoFallback = buildSvgPlaceholder(title, 250, 100);

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection variant="none" py={{ base: 16, md: 24 }} noContainer>
        <VStack spacing={6} textAlign="center" px={4}>
          {logoLight && logoDark && (
            <Image
              src={logoSrc}
              alt={`${title} Logo`}
              h={{ base: 150, md: 175 }}
              fallbackSrc={logoFallback}
            />
          )}
          <Heading
            as="h1"
            size={{ base: "2xl", md: "3xl" }}
            color={headingColor}
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            maxW="3xl"
            color={subtitleColor}
          >
            {tagline}
          </Text>
        </VStack>
      </AnimatedSection>

      {/* Content Sections */}
      {children}
    </>
  );
}

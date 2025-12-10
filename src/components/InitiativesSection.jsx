"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "./layout/AnimatedSection";
import { staggerContainer } from "../utils/animations";
import { buildSvgPlaceholder } from "../utils/placeholders";

const initiatives = [
  {
    name: "Trinity Force",
    externalUrl: "https://team8732.com/",
    lightLogo: "/images/logos/trinity-force-light-mode.png",
    darkLogo: "/images/logos/trinity-force-dark-mode.png",
    description:
      "Trinity Force is our all-girls FIRST Robotics Competition (FRC) team, created to give young women a dedicated space to lead, design, and compete at the highest technical level. Students take ownership of mechanical design, programming, and strategy—building confidence, leadership, and real engineering skills both on and off the field.",
    imageOnLeft: true,
  },
  {
    name: "ByteForce",
    externalUrl: "https://team10312.com/",
    lightLogo: "/images/logos/byte-force-light-mode.png",
    darkLogo: "/images/logos/byte-force-dark-mode.png",
    description:
      "ByteForce is our co-ed FRC team focused on high-level engineering, software development, and competitive strategy. Students learn CAD, mechanical fabrication, and Java programming while integrating sensors, automation, and game analysis to build robots that compete on some of the biggest stages in STEM.",
    imageOnLeft: false,
  },
  {
    name: "Cultivation Camps",
    slug: "cultivation-camps",
    logo: "/images/logos/cultivation-camps.png",
    description:
      "Our student-led cultivation camps introduce younger students to STEM through hands-on robotics, coding, and design experiences. Designed to cater to multiple learning styles, these camps create an environment where students can thrive—sparking curiosity, building foundational skills, and expanding STEM access to underrepresented communities.",
    imageOnLeft: true,
  },
];

function InitiativeRow({
  name,
  slug,
  externalUrl,
  logo,
  lightLogo,
  darkLogo,
  description,
  imageOnLeft,
}) {
  const rowBorderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const descriptionColor = useColorModeValue(
    "text.mutedLight",
    "text.mutedDark"
  );
  const headingColor = useColorModeValue("text.light", "white");

  const logoSrc =
    lightLogo && darkLogo ? useColorModeValue(lightLogo, darkLogo) : logo;
  const placeholder = buildSvgPlaceholder(name, 250, 150);

  const imageContent = (
    <Box
      flex={{ base: "none", md: 1 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={8}
    >
      <Image
        src={logoSrc}
        alt={`${name} Logo`}
        maxW={{ base: "250px", md: "300px" }}
        fallbackSrc={placeholder}
      />
    </Box>
  );

  const textContent = (
    <VStack
      flex={{ base: "none", md: 1 }}
      align={{ base: "center", md: imageOnLeft ? "flex-start" : "flex-end" }}
      textAlign={{ base: "center", md: imageOnLeft ? "left" : "right" }}
      spacing={4}
      p={8}
    >
      <Heading as="h3" size="lg" color={headingColor}>
        {name}
      </Heading>
      <Text color={descriptionColor} fontSize="lg">
        {description}
      </Text>
      <Button
        as="a"
        href={externalUrl || `/programs/${slug}`}
        target={externalUrl ? "_blank" : undefined}
        rel={externalUrl ? "noopener noreferrer" : undefined}
        colorScheme="brand"
        variant="outline"
        size="md"
        mt={2}
      >
        {externalUrl ? "Visit Website" : "Learn More"}
      </Button>
    </VStack>
  );

  return (
    <Flex
      as={motion.div}
      direction={{ base: "column", md: "row" }}
      align="center"
      w="100%"
      py={8}
      borderBottomWidth={1}
      borderBottomColor={rowBorderColor}
      _last={{ borderBottom: "none" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
    >
      {imageOnLeft ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </Flex>
  );
}

export default function InitiativesSection() {
  const headingColor = useColorModeValue("text.light", "text.dark");
  const subtitleColor = useColorModeValue("text.mutedLight", "text.mutedDark");

  return (
    <AnimatedSection id="initiatives" variant="default">
      <VStack spacing={8}>
        {/* Section Header */}
        <VStack spacing={4} textAlign="center" mb={8}>
          <Heading as="h2" size="xl" color={headingColor}>
            Our Initiatives
          </Heading>
          <Text color={subtitleColor} fontSize="lg" maxW="2xl">
            Explore the robotics teams and cultivation camps that bring our
            mission to life and expand access to high-quality STEM education.
          </Text>
        </VStack>

        {/* Initiative Rows with Stagger Animation */}
        <Box
          as={motion.div}
          w="100%"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {initiatives.map((initiative) => (
            <InitiativeRow
              key={initiative.name}
              name={initiative.name}
              slug={initiative.slug}
              externalUrl={initiative.externalUrl}
              logo={initiative.logo}
              lightLogo={initiative.lightLogo}
              darkLogo={initiative.darkLogo}
              description={initiative.description}
              imageOnLeft={initiative.imageOnLeft}
            />
          ))}
        </Box>
      </VStack>
    </AnimatedSection>
  );
}

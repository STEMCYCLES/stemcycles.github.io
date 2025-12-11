"use client";

import {
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Icon,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  InfoOutlineIcon,
  QuestionOutlineIcon,
  RepeatIcon,
  SettingsIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
import { motion } from "framer-motion";
import AnimatedSection from "./layout/AnimatedSection";
import { staggerContainer } from "../utils/animations";
import { buildSvgPlaceholder } from "../utils/placeholders";
import { FiSettings } from "react-icons/fi";

const aboutItems = [
  {
    title: "What",
    icon: RepeatIcon,
    description:
      "Founded in 2021, STEMCYCLES is a 501(c)(3) nonprofit focused on STEM teaching and training. We provide industry-level knowledge and hands-on experiences to underrepresented students from K–12 and beyond, building a foundation for college, careers, and life—then we repeat the Cycle!",
  },
  {
    title: "Why",
    icon: UnlockIcon,
    description:
      "STEM is one of the fastest-growing fields worldwide, yet access to quality education is far from equal. By removing financial, geographic, and social barriers, we help underrepresented students see STEM as an achievable dream—benefiting them and the field as a whole.",
  },
  {
    title: "How",
    icon: FiSettings,
    description:
      "Through competitive robotics, student-led cultivation camps, and long-term mentorship, we develop both technical and soft skills. Students work on real-world projects, connect with industry mentors, and build the confidence and connections to thrive in any path they pursue.",
  },
];

const logoFallback = buildSvgPlaceholder("STEMCYCLES", 200, 80);

export default function AboutSection() {
  const cardBg = useColorModeValue("surface.light", "surface.dark");
  const cardBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const headingColor = useColorModeValue("text.light", "text.dark");
  const bodyTextColor = useColorModeValue("text.mutedLight", "text.mutedDark");

  return (
    <AnimatedSection
      id="about"
      variant="alt"
      py={{ base: 12, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      <VStack spacing={12} position="relative" zIndex={1}>
        {/* Section Header */}
        <VStack spacing={4} textAlign="center">
          <Image
            src="/images/logos/stemcycles-main.png"
            alt="STEMCYCLES Logo"
            h={80}
            fallbackSrc={logoFallback}
          />
          <VStack spacing={2}>
            <Heading as="h2" size="xl" color={headingColor}>
              About STEMCYCLES
            </Heading>
            <Box
              as="div"
              h="4px"
              w="480px"
              mx="auto"
              bgImage="url(/images/styling/sc-three-stripes.png)"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              borderRadius="2px"
            />
          </VStack>
        </VStack>

        {/* Three Columns with Stagger Animation */}
        <SimpleGrid
          as={motion.div}
          columns={{ base: 1, md: 3 }}
          spacing={8}
          w="100%"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutItems.map((item) => (
            <VStack
              as={motion.div}
              key={item.title}
              p={6}
              bg={cardBg}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={cardBorder}
              shadow="md"
              spacing={4}
              align="center"
              textAlign="center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <Icon as={item.icon} boxSize={10} color="accent.500" />
              <Heading as="h3" size="lg" color={headingColor}>
                {item.title}
              </Heading>
              <Text color={bodyTextColor}>{item.description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </AnimatedSection>
  );
}

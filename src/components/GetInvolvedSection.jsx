"use client";

import { RiParentLine } from "react-icons/ri";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GoSponsorTiers } from "react-icons/go";
import {
  Button,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/animations";
import AnimatedSection from "./layout/AnimatedSection";

const involvementOptions = [
  {
    title: "Parents & Families",
    icon: RiParentLine,
    description:
      "Get your children involved in our initatives! Walk alongside your student in STEM. Help with transportation, event support, and spreading the word so more students can access high-quality STEM opportunities.",
    buttonText: "Support Your Student",
  },
  {
    title: "Mentors & Volunteers",
    icon: LiaChalkboardTeacherSolid,
    description:
      "Share your experience in engineering, technology, or education and mentor the next generation of STEM leaders. Whether you're a FIRST alum, student, or professional, your time and insight have a direct impact.",
    buttonText: "Become a Mentor",
  },
  {
    title: "Sponsors & Partners",
    icon: GoSponsorTiers,
    description:
      "Invest in tools, materials, and experiences that unlock STEM for underrepresented students. As a 501(c)(3), we work with companies, foundations, and individuals to build long-term, sustainable impact.",
    buttonText: "Partner With Us",
  },
];

export default function GetInvolvedSection() {
  const sectionHeadingColor = useColorModeValue("text.light", "white");
  const sectionSubTextColor = useColorModeValue(
    "text.mutedLight",
    "whiteAlpha.800"
  );
  const cardBg = useColorModeValue("surface.light", "surface.dark");
  const cardHeadingColor = useColorModeValue("text.light", "white");
  const cardTextColor = useColorModeValue("text.mutedLight", "whiteAlpha.900");
  const cardBorderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.200");

  return (
    <AnimatedSection id="get-involved" variant="default">
      <VStack spacing={12}>
        {/* Section Header */}
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl" color={sectionHeadingColor}>
            Get Involved
          </Heading>
          <Text color={sectionSubTextColor} fontSize="lg" maxW="2xl">
            Join us in making a difference. There are many ways to support
            students, share your skills, and help expand access to STEM
            education.
          </Text>
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
          {involvementOptions.map((option) => (
            <VStack
              as={motion.div}
              key={option.title}
              p={8}
              bg={cardBg}
              borderRadius="lg"
              shadow="lg"
              borderWidth="1px"
              borderColor={cardBorderColor}
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
              <Icon as={option.icon} boxSize={12} color="accent.500" />
              <Heading as="h3" size="lg" color={cardHeadingColor}>
                {option.title}
              </Heading>
              <Text color={cardTextColor} flex={1} textAlign="justify">
                {option.description}
              </Text>
              <Button
                as="a"
                href="https://forms.gle/N9xeWS7eBrRYzWuo9"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="brand"
                size="md"
              >
                {option.buttonText}
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </AnimatedSection>
  );
}

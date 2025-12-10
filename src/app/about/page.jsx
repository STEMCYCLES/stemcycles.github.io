"use client";

import {
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import AnimatedSection from "../../components/layout/AnimatedSection";
import { buildSvgPlaceholder } from "../../utils/placeholders";

export default function AboutPage() {
  const headingColor = useColorModeValue("text.light", "text.dark");
  const textColor = useColorModeValue("text.mutedLight", "text.mutedDark");
  const bgColor = useColorModeValue("surface.light", "surface.dark");
  const teamPhotoFallback = buildSvgPlaceholder("Team Photo", 600, 400);
  const driveTeamFallback = buildSvgPlaceholder("Drive Team", 600, 400);

  return (
    <>
      <AnimatedSection variant="none" py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Heading as="h1" size="2xl" color={headingColor}>
              About STEMCYCLES
            </Heading>
            <Text color={textColor} fontSize="lg" maxW="3xl">
              Learn more about our mission, vision, and the team behind
              STEMCYCLES.
            </Text>
          </VStack>
        </Container>
      </AnimatedSection>

      <AnimatedSection variant="default">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} w="100%">
            <VStack
              align="flex-start"
              spacing={4}
              justify="center"
              order={{ base: 2, md: 1 }}
            >
              <Heading as="h2" size="lg" color="accent.500">
                Our Mission
              </Heading>
              <Text
                color={textColor}
                fontSize="lg"
                textAlign={{ base: "left", md: "justify" }}
              >
                STEMCYCLES is dedicated to empowering underrepresented youth
                through hands-on STEM education and mentorship. We believe every
                child deserves access to the tools, resources, and opportunities
                needed to explore their potential in science, technology,
                engineering, and mathematics.
              </Text>
            </VStack>
            <Box display="flex" alignItems="center" order={{ base: 1, md: 2 }}>
              <Image
                src="/images/about/build-season-2022-gearbox.PNG"
                alt="STEMCYCLES Team Building"
                borderRadius="lg"
                shadow="lg"
                w="100%"
                h="auto"
                objectFit="cover"
                fallbackSrc={teamPhotoFallback}
              />
            </Box>
          </SimpleGrid>
        </Container>
      </AnimatedSection>

      <AnimatedSection variant="alt">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} w="100%">
            <Box display="flex" alignItems="center" order={{ base: 1, md: 1 }}>
              <Image
                src="/images/about/drive-team-10312.jpeg"
                alt="ByteForce Drive Team"
                borderRadius="lg"
                shadow="lg"
                w="100%"
                h="auto"
                objectFit="cover"
                fallbackSrc={driveTeamFallback}
              />
            </Box>
            <VStack
              align="flex-start"
              spacing={4}
              justify="center"
              order={{ base: 2, md: 2 }}
            >
              <Heading as="h2" size="lg" color="accent.500">
                Our Vision
              </Heading>
              <Text
                color={textColor}
                fontSize="lg"
                textAlign={{ base: "left", md: "justify" }}
              >
                We envision a world where all students, regardless of their
                background, have equal access to quality STEM education and the
                opportunity to pursue careers in fields that shape our future.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </AnimatedSection>

      <AnimatedSection variant="default">
        <Container maxW="container.xl">
          <VStack spacing={8} w="100%">
            <Heading as="h2" size="lg" color={headingColor} textAlign="center">
              Our Values
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
              {[
                {
                  title: "Inclusivity",
                  description:
                    "We welcome students from all backgrounds and create safe spaces for learning.",
                },
                {
                  title: "Innovation",
                  description:
                    "We encourage creative thinking and problem-solving through hands-on projects.",
                },
                {
                  title: "Community",
                  description:
                    "We build lasting connections between students, mentors, and industry partners.",
                },
              ].map((value) => (
                <VStack
                  key={value.title}
                  p={6}
                  bg={bgColor}
                  borderRadius="lg"
                  shadow="md"
                  spacing={3}
                  textAlign="center"
                >
                  <Heading as="h3" size="md" color="accent.500">
                    {value.title}
                  </Heading>
                  <Text color={textColor}>{value.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </AnimatedSection>
    </>
  );
}

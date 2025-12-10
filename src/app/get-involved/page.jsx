"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { RiParentLine } from "react-icons/ri";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GoSponsorTiers } from "react-icons/go";
import AnimatedSection from "../../components/layout/AnimatedSection";

const involvementOptions = [
  {
    title: "Parents & Families",
    description:
      "Get your children involved in our initatives! Walk alongside your student in STEM. Help with transportation, event support, and spreading the word so more students can access high-quality STEM opportunities.",
    icon: RiParentLine,
  },
  {
    title: "Mentors & Volunteers",
    description:
      "Share your experience in engineering, technology, or education and mentor the next generation. Whether you're a FIRST alum, student, or professional, your time has a direct impact.",
    icon: LiaChalkboardTeacherSolid,
  },
  {
    title: "Sponsors & Partners",
    description:
      "Invest in tools, materials, and experiences that unlock STEM for underrepresented students. As a 501(c)(3), we work with companies, foundations, and individuals to build long-term impact.",
    icon: GoSponsorTiers,
  },
];

const photoSlides = [
  {
    src: "/images/get-involved/shreya-head.jpg",
    alt: "Portrait of team member Shreya",
    objectPosition: "center 30%",
  },
  {
    src: "/images/get-involved/2022-team-photo.jpg",
    alt: "Team photo from 2022",
  },
  {
    src: "/images/get-involved/library-diaz.jpg",
    alt: "Students collaborating at the library",
  },
  {
    src: "/images/get-involved/plano-award.JPEG",
    alt: "Team receiving an award",
    objectPosition: "center 30%",
  },
  {
    src: "/images/get-involved/itkan-practice.JPEG",
    alt: "Drive team practice",
  },
  {
    src: "/images/get-involved/flowers.jpg",
    alt: "Team members with flowers",
  },
  {
    src: "/images/get-involved/elevator-trap.jpg",
    alt: "Robotics build session",
  },
];

export default function GetInvolvedPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView =
    useBreakpointValue({ base: 1.2, sm: 2, md: 3, xl: 4 }) || 1.2;
  const maxIndex = useMemo(() => {
    return Math.max(0, Math.ceil(photoSlides.length - slidesPerView));
  }, [slidesPerView]);
  const headingColor = useColorModeValue("text.light", "text.dark");
  const subTextColor = useColorModeValue("text.mutedLight", "text.mutedDark");
  const cardBg = useColorModeValue("surface.light", "surface.dark");
  const cardBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const cardText = useColorModeValue("text.mutedLight", "text.mutedDark");
  const accentColor = useColorModeValue("accent.500", "accent.400");

  useEffect(() => {
    if (photoSlides.length === 0) return undefined;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3200);
    return () => clearInterval(id);
  }, [maxIndex]);

  return (
    <>
      <AnimatedSection variant="default" py={{ base: 12, md: 12 }}>
        <VStack spacing={{ base: 6, md: 8 }} textAlign="center">
          <Heading
            as="h1"
            size={{ base: "2xl", md: "3xl" }}
            color={headingColor}
          >
            Get Involved
          </Heading>
          <Text color={subTextColor} maxW="3xl">
            Choose the path that fits you best. Every role supports students
            discovering what's possible through STEM.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%">
            {involvementOptions.map((option) => (
              <VStack
                key={option.title}
                align="center"
                spacing={4}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={cardBorder}
                shadow="lg"
                textAlign="center"
              >
                <Icon as={option.icon} boxSize={10} color={accentColor} />
                <Heading as="h3" size="lg" color={headingColor}>
                  {option.title}
                </Heading>
                <Text color={cardText} textAlign="justify">
                  {option.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </AnimatedSection>

      <AnimatedSection variant="alt" py={{ base: 6, md: 8 }}>
        <VStack spacing={16}>
          <Box
            position="relative"
            w="100%"
            maxW="8xl"
            mx="auto"
            overflow="hidden"
            borderRadius="xl"
            borderWidth="1px"
            borderColor={cardBorder}
            shadow="xl"
            bg={cardBg}
          >
            <Box
              display="flex"
              gap={0}
              transition="transform 0.6s ease"
              transform={`translateX(-${
                (currentSlide / photoSlides.length) * 100
              }%)`}
            >
              {photoSlides.map((slide) => (
                <Box
                  key={slide.src}
                  flex="0 0 auto"
                  w={`calc(100% / ${slidesPerView})`}
                  overflow="hidden"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    w="100%"
                    h={{ base: "220px", md: "320px" }}
                    objectFit="cover"
                    objectPosition={slide.objectPosition || "center"}
                    fallbackSrc="/images/get-involved/2022-team-photo.jpg"
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            w="100%"
            maxW="8xl"
            mx="auto"
            bg={cardBg}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={cardBorder}
            shadow="xl"
            p={{ base: 6, md: 8 }}
          >
            <VStack spacing={6} align="stretch">
              <VStack spacing={2} textAlign="center">
                <Heading as="h2" size="lg" color={headingColor}>
                  Contact Us
                </Heading>
                <Text color={subTextColor}>
                  Ready to get involved? Fill out our Google Form and we'll be
                  in touch.
                </Text>
              </VStack>

              <Button
                as="a"
                href="https://forms.gle/N9xeWS7eBrRYzWuo9"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="brand"
                size="lg"
                w="100%"
              >
                Open the Google Form
              </Button>
            </VStack>
          </Box>
        </VStack>
      </AnimatedSection>
    </>
  );
}

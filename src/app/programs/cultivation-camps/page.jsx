"use client";

import {
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Box,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";
import ProgramPageLayout from "../../../components/layout/ProgramPageLayout";
import AnimatedSection from "../../../components/layout/AnimatedSection";
import { buildSvgPlaceholder } from "../../../utils/placeholders";

export default function CultivationCampsPage() {
  const impactPhotoFallback = buildSvgPlaceholder(
    "Cultivation Camps",
    500,
    350
  );

  return (
    <ProgramPageLayout
      title="Cultivation Camps"
      tagline="Student-Led STEM Experiences for K-12 Learners"
      logoLight="/images/logos/cultivation-camps.png"
      logoDark="/images/logos/cultivation-camps.png"
    >
      {/* Overview */}
      <AnimatedSection id="overview" variant="alt">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
          <VStack spacing={6} align="start">
            <Heading as="h2" size="xl">
              Inspiring the Next Generation
            </Heading>
            <Text fontSize="lg">
              Our cultivation camps provide underrepresented students in STEM
              access to high-quality teaching and training. Students ranging
              from K-12th grade can participate in 1-2 week camps focused on
              topics like basic circuits, intro to programming, and robotics.
            </Text>
            <Text fontSize="lg">
              The goal is to provide students with an experience that drives
              them to continue in STEM and equip them with a solid foundation to
              do so. Our student-led camps introduce younger students to STEM
              through hands-on robotics, coding, and design experiences.
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              Designed to cater to multiple learning styles, these camps create
              an environment where students can thrive—sparking curiosity,
              building foundational skills, and expanding STEM access to
              underrepresented communities.
            </Text>
          </VStack>

          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              src="/images/cultivation-camps/cultivation-camp-outreach.jpg"
              alt="Cultivation Camp Outreach"
              w="100%"
              h="auto"
              maxW="520px"
              maxH="480px"
              objectFit="cover"
              borderRadius="lg"
              shadow="lg"
            />
          </Box>
        </SimpleGrid>
      </AnimatedSection>

      {/* Camp Structure */}
      <AnimatedSection id="structure" variant="default">
        <VStack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center">
            Camp Structure
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="3xl">
            Students from our robotics teams run these camps annually, mentoring
            younger students and inspiring early interest in engineering,
            robotics, and technology.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%">
            <StructureCard
              title="1-2 Week Sessions"
              description="Intensive hands-on learning experiences designed to maximize engagement and skill development in a short timeframe."
            />
            <StructureCard
              title="K-12 Grade Levels"
              description="Age-appropriate curriculum tailored to different developmental stages, from elementary through high school."
            />
            <StructureCard
              title="Student-Led Instruction"
              description="High school robotics team members serve as mentors, developing their own leadership and teaching skills."
            />
          </SimpleGrid>
        </VStack>
      </AnimatedSection>

      {/* Curriculum Areas */}
      <AnimatedSection id="curriculum" variant="alt">
        <VStack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center">
            What Students Learn
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
            <CurriculumCard
              title="Hands-On Robotics"
              description="Students build small-scale robots and learn the fundamentals of mechanical systems, movement, torque, and automation. Kits include VEX, LEGO Mindstorms, and other educational robotics platforms."
            />
            <CurriculumCard
              title="Coding Fundamentals"
              description="Introduction to programming concepts through visual block-based coding and text-based languages. Students learn logic, loops, conditionals, and problem-solving."
            />
            <CurriculumCard
              title="3D Printing & Design"
              description="Introduction to additive manufacturing and computer-aided design. Students learn to create digital models and print their own designs."
            />
            <CurriculumCard
              title="Basic Circuits & Electronics"
              description="Explore electricity, circuits, sensors, and basic electronic components through hands-on projects and experiments."
            />
            <CurriculumCard
              title="Engineering Design Process"
              description="Learn to identify problems, brainstorm solutions, prototype, test, and iterate—developing critical engineering thinking skills."
            />
            <CurriculumCard
              title="Teamwork & Communication"
              description="Collaborate with peers on group projects, present findings, and develop essential soft skills for future success."
            />
          </SimpleGrid>
        </VStack>
      </AnimatedSection>

      {/* Impact on Communities */}
      <AnimatedSection id="impact" variant="default">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              src="/images/cultivation-camps/ethel-schoeffner elementary.jpg"
              alt="Cultivation camp outreach at Ethel Schoeffner Elementary"
              w="100%"
              h="auto"
              maxW="520px"
              maxH="380px"
              objectFit="cover"
              borderRadius="lg"
              shadow="lg"
              fallbackSrc={impactPhotoFallback}
            />
          </Box>

          <VStack spacing={6} align="start">
            <Heading as="h2" size="xl">
              Our Impact on Communities
            </Heading>
            <Text fontSize="lg">
              By offering accessible STEM education, these camps help students
              develop leadership, communication, and teaching skills, expanding
              robotics and STEM knowledge to underserved communities. Students
              who otherwise may not have the chance to develop their skills in
              STEM for various reasons—whether lack of funds, geographic
              barriers, or social prejudgment—are provided with resources and
              placed into an environment where they can advance.
            </Text>
            <Text fontSize="lg">
              This means more developed students, but it also means diverse
              future workers who will bring different perspectives to the
              industry and work to improve our lives. When families support
              these camps, they invest in the future—developing students in
              their community who are prepared for whatever challenges they may
              face.
            </Text>
          </VStack>
        </SimpleGrid>
      </AnimatedSection>

      {/* Student Leadership Development */}
      <AnimatedSection id="leadership" variant="alt">
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">
            Developing Student Leaders
          </Heading>
          <Text fontSize="lg">
            Our camps provide a unique opportunity for high school robotics team
            members to step into leadership roles. By teaching younger students,
            our team members:
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
            <BenefitCard benefit="Deepen their own STEM knowledge by teaching concepts to others" />
            <BenefitCard benefit="Develop public speaking and presentation skills" />
            <BenefitCard benefit="Build mentorship and coaching abilities" />
            <BenefitCard benefit="Gain experience in curriculum design and instruction" />
            <BenefitCard benefit="Foster empathy and patience through working with diverse learners" />
            <BenefitCard benefit="Create lasting connections with the next generation of STEM students" />
          </SimpleGrid>
        </VStack>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection id="get-involved" variant="default">
        <VStack spacing={6} textAlign="center">
          <Heading as="h2" size="xl">
            Get Involved
          </Heading>
          <Text fontSize="lg" maxW="3xl">
            Whether you're a parent looking for summer opportunities for your
            child, a volunteer wanting to support STEM education, or an
            organization interested in sponsoring camps—there are many ways to
            get involved.
          </Text>
          <Button
            as={NextLink}
            href="/get-involved"
            colorScheme="brand"
            size="lg"
            mt={4}
          >
            Support Our Camps
          </Button>
        </VStack>
      </AnimatedSection>
    </ProgramPageLayout>
  );
}

// Structure Card Component
function StructureCard({ title, description }) {
  const cardBg = useColorModeValue("surface.light", "surface.dark");
  const cardBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const headingColor = useColorModeValue("text.light", "text.dark");
  const textColor = useColorModeValue("text.mutedLight", "text.mutedDark");

  return (
    <VStack
      p={6}
      bg={cardBg}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={cardBorder}
      shadow="md"
      spacing={3}
      align="center"
      textAlign="center"
    >
      <Heading as="h3" size="md" color={headingColor}>
        {title}
      </Heading>
      <Text color={textColor}>{description}</Text>
    </VStack>
  );
}

// Curriculum Card Component
function CurriculumCard({ title, description }) {
  const cardBg = useColorModeValue("surface.light", "surface.dark");
  const cardBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const headingColor = useColorModeValue("text.light", "text.dark");
  const textColor = useColorModeValue("text.mutedLight", "text.mutedDark");

  return (
    <Box
      p={6}
      bg={cardBg}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={cardBorder}
      shadow="md"
    >
      <VStack align="start" spacing={3}>
        <Heading as="h3" size="md" color={headingColor}>
          {title}
        </Heading>
        <Text color={textColor}>{description}</Text>
      </VStack>
    </Box>
  );
}

// Benefit Card Component
function BenefitCard({ benefit }) {
  const cardBg = useColorModeValue("surface.light", "surface.dark");
  const cardBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const textColor = useColorModeValue("text.mutedLight", "text.mutedDark");

  return (
    <Box
      p={4}
      bg={cardBg}
      borderRadius="md"
      borderWidth="1px"
      borderColor={cardBorder}
    >
      <Text color={textColor}>{benefit}</Text>
    </Box>
  );
}

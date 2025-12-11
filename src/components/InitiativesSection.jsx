"use client";

import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/animations";
import { buildSvgPlaceholder } from "../utils/placeholders";
import AnimatedSection from "./layout/AnimatedSection";

const MotionBox = chakra(motion.div);

const initiatives = [
  {
    name: "Trinity Force",
    externalUrl: "https://team8732.com/",
    lightLogo: "/images/logos/trinity-force-light-mode.png",
    darkLogo: "/images/logos/trinity-force-dark-mode.png",
    stripes: "/images/styling/tf-three-stripes.png",
    description:
      "Trinity Force is our all-girls FIRST Robotics Competition (FRC) team, created to give young women a dedicated space to lead, design, and compete at the highest technical level. Students take ownership of mechanical design, programming, and strategy—building confidence, leadership, and real engineering skills both on and off the field.",
    imageOnLeft: true,
  },
  {
    name: "ByteForce",
    externalUrl: "https://team10312.com/",
    lightLogo: "/images/logos/byte-force-light-mode.png",
    darkLogo: "/images/logos/byte-force-dark-mode.png",
    stripes: "/images/styling/bf-three-stripes.png",
    description:
      "ByteForce is our co-ed FRC team focused on high-level engineering, software development, and competitive strategy. Students learn CAD, mechanical fabrication, and Java programming while integrating sensors, automation, and game analysis to build robots that compete on some of the biggest stages in STEM.",
    imageOnLeft: false,
  },
  {
    name: "Cultivation Camps",
    slug: "cultivation-camps",
    logo: "/images/logos/cultivation-camps.png",
    stripes: "/images/styling/cc-three-stripes.png",
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
  stripes,
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
      order={{ base: 0, md: imageOnLeft ? 0 : 1 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={{ base: 4, md: 8 }}
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
      order={{ base: 1, md: imageOnLeft ? 1 : 0 }}
      align={{ base: "center", md: imageOnLeft ? "flex-start" : "flex-end" }}
      textAlign={{ base: "center", md: imageOnLeft ? "left" : "right" }}
      spacing={{ base: 3, md: 4 }}
      p={{ base: 4, md: 8 }}
    >
      <Box
        display="inline-block"
        alignSelf={{
          base: "center",
          md: imageOnLeft ? "flex-start" : "flex-end",
        }}
      >
        <VStack spacing={2} align="center" w="fit-content">
          <Heading
            as="h3"
            size="lg"
            color={headingColor}
            display="inline-block"
          >
            {name}
          </Heading>
          {stripes && (
            <Box
              w="200px"
              h="3px"
              mx="auto"
              bgImage={`url(${stripes})`}
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              borderRadius="2px"
            />
          )}
        </VStack>
      </Box>
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
    <Box position="relative" w="100%">
      {/* Decorative Stripes */}
      {stripes && (
        <MotionBox
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          {...(imageOnLeft
            ? { right: { base: "-30px", md: "-40px" } }
            : { left: { base: "-30px", md: "-40px" } })}
          w={{ base: "60px", md: "80px" }}
          h={{ base: "200px", md: "300px" }}
          zIndex={0}
          initial={{
            opacity: 0,
            x: imageOnLeft ? 20 : -20,
            scaleX: name === "ByteForce" ? -1 : 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scaleX: name === "ByteForce" ? -1 : 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          display={{ base: "none", md: "block" }}
        >
          <Image
            src={stripes}
            alt={`${name} Stripes`}
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </MotionBox>
      )}

      <Flex
        as={motion.div}
        direction={{ base: "column", md: "row" }}
        align="center"
        w="100%"
        py={8}
        borderBottomWidth={1}
        borderBottomColor={rowBorderColor}
        _last={{ borderBottom: "none" }}
        position="relative"
        zIndex={1}
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
    </Box>
  );
}

export default function InitiativesSection() {
  const headingColor = useColorModeValue("text.light", "text.dark");
  const subtitleColor = useColorModeValue("text.mutedLight", "text.mutedDark");

  return (
    <AnimatedSection
      id="initiatives"
      variant="default"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative Images on Outskirts */}
      <MotionBox
        position="absolute"
        left={{ base: 5, md: 50, lg: 50, xl: 100 }}
        top={{ base: "18%", md: "35%", lg: "35%", xl: "18%" }}
        zIndex={0}
        initial={{ opacity: 0, x: -50, rotate: -15 }}
        whileInView={{ opacity: 1, x: 0, rotate: -15 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/home/nice-robot-waco.JPG"
          alt="ByteForce robot at competition"
          w={{ base: "120px", md: "135px", lg: "150px", xl: "400px" }}
          h="auto"
          objectFit="contain"
          borderRadius="lg"
        />
      </MotionBox>

      <MotionBox
        position="absolute"
        right={{ base: 5, md: 50, lg: 55, xl: 100 }}
        bottom={{ base: "46%", md: "32%", lg: "30%", xl: "15%" }}
        zIndex={0}
        initial={{ opacity: 0, x: 50, rotate: 15 }}
        whileInView={{ opacity: 1, x: 0, rotate: 15 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/images/home/nice-robot-waco-10312.jpeg"
          alt="Robotics competition action"
          w={{ base: "100px", md: "125px", lg: "125px", xl: "300px" }}
          h="auto"
          objectFit="contain"
          borderRadius="lg"
        />
      </MotionBox>

      <VStack spacing={8} position="relative" zIndex={1}>
        {/* Section Header */}
        <VStack spacing={4} textAlign="center" mb={8}>
          <VStack spacing={2}>
            <Heading as="h2" size="xl" color={headingColor}>
              Our Initiatives
            </Heading>
            <Box
              as="div"
              h="4px"
              w="140px"
              mx="auto"
              bgImage="url(/images/styling/sc-three-stripes.png)"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              borderRadius="2px"
            />
          </VStack>
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
          viewport={{ once: true, amount: 0.12 }}
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
              stripes={initiative.stripes}
              description={initiative.description}
              imageOnLeft={initiative.imageOnLeft}
            />
          ))}
        </Box>
      </VStack>
    </AnimatedSection>
  );
}

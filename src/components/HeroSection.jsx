"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Section from "./layout/Section";

const MotionVStack = chakra(motion.div);
const MotionBox = chakra(motion.div);

// All hero images with custom positioning
// bgPosition format: "horizontal% vertical%"
// - horizontal: 0% = left, 50% = center, 100% = right
// - vertical: 0% = top, 50% = center, 100% = bottom
const heroImages = [
  {
    src: "/images/hero/waco-winning-photo-2025.jpg",
    position: "50% 20%", // Moved left (50% horizontal) and adjusted vertical
  },
  {
    src: "/images/hero/Waco-10312-driverstation.jpg",
    position: "center 35%", // Centered
  },
  {
    src: "/images/hero/Waco-Awards-13011165.jpg",
    position: "60% 5%", // Adjust to capture faces
  },
  {
    src: "/images/hero/state-robot-on-field.jpg",
    position: "center 85%", // Higher number = lower in frame (shows more top)
  },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel every 5 seconds (unless paused)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const buttonBg = useColorModeValue("whiteAlpha.800", "whiteAlpha.300");
  const buttonHoverBg = useColorModeValue("white", "blackAlpha.800");

  return (
    <Section
      variant="none"
      py={0}
      position="relative"
      h={{ base: "60vh", md: "70vh" }}
      overflow="hidden"
    >
      {/* Carousel Background Images with Slide Transition */}
      <AnimatePresence initial={false} custom={currentImageIndex}>
        <MotionBox
          key={currentImageIndex}
          custom={currentImageIndex}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            x: { type: "tween", duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }, // Smoother, slower cubic-bezier easing
          }}
          bgImage={`url(${heroImages[currentImageIndex].src})`}
          bgSize="cover"
          bgPosition={heroImages[currentImageIndex].position}
          bgRepeat="no-repeat"
        />
      </AnimatePresence>

      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="blackAlpha.600"
      />

      {/* Pause/Play Button */}
      <IconButton
        aria-label={isPaused ? "Play carousel" : "Pause carousel"}
        icon={isPaused ? <FaPlay /> : <FaPause />}
        onClick={() => setIsPaused(!isPaused)}
        position="absolute"
        bottom={4}
        right={4}
        size="md"
        bg={buttonBg}
        color="text.light"
        _hover={{ bg: buttonHoverBg }}
        zIndex={10}
      />

      {/* Content with Entrance Animation */}
      <MotionVStack
        as={VStack}
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        spacing={4}
        textAlign="center"
        color="white"
        px={4}
        pb={{ base: 16, md: 20 }}
        maxW="container.xl"
        mx="auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
        >
          Welcome to STEMCYCLES
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl">
          Empowering the next generation through STEM education, mentorship, and
          community engagement.
        </Text>
      </MotionVStack>
    </Section>
  );
}

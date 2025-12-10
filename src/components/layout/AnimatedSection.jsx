"use client";

import { motion } from "framer-motion";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { fadeInUp, scrollViewport } from "../../utils/animations";

/**
 * AnimatedSection - A reusable wrapper for page sections with scroll-triggered animations
 *
 * This is a drop-in replacement for the Section component that adds Framer Motion
 * scroll-triggered animations. It maintains the same API as Section while adding
 * animation capabilities.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.id - Optional anchor id
 * @param {"default" | "alt" | "dark" | "none"} props.variant - Background style variant
 * @param {object} props.animation - Framer Motion animation variant (default: fadeInUp)
 * @param {object} props.viewport - Framer Motion viewport configuration (default: scrollViewport)
 * @param {object} props.py - Override vertical padding (default: { base: 12, md: 20 })
 * @param {object} props.containerProps - Additional props for the Container
 * @param {boolean} props.noContainer - If true, don't wrap children in Container
 * @param {object} props.rest - Additional props passed to the outer MotionBox
 */
export default function AnimatedSection({
  children,
  id,
  variant = "default",
  animation = fadeInUp,
  viewport = scrollViewport,
  py,
  containerProps,
  noContainer = false,
  ...rest
}) {
  // Background colors for each variant - using custom brand greys
  const defaultBg = useColorModeValue("background.light", "background.dark");
  const altBg = useColorModeValue("brand.50", "brand.900");
  const darkBg = useColorModeValue("brand.100", "brand.800");

  // Map variant to background
  const bgMap = {
    default: defaultBg,
    alt: altBg,
    dark: darkBg,
    none: "transparent",
  };

  const bg = bgMap[variant] || defaultBg;

  // Default padding
  const defaultPy = { base: 12, md: 20 };

  return (
    <Box
      as={motion.section}
      id={id}
      w="100%"
      py={py ?? defaultPy}
      bg={bg}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={animation}
      {...rest}
    >
      {noContainer ? (
        children
      ) : (
        <Container maxW="container.xl" {...containerProps}>
          {children}
        </Container>
      )}
    </Box>
  );
}

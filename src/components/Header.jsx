"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiMonitor } from "react-icons/fi";
import NextLink from "next/link";
import { buildSvgPlaceholder } from "../utils/placeholders";

const MODE_STORAGE_KEY = "stemcycles-mode-preference";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Mission & Vision", href: "/about" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Media", href: "https://stemcycles.smugmug.com/", isExternal: true },
  {
    label: "Give",
    href: "https://www.paypal.com/paypalme/stemcycles",
    isExternal: true,
  },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, setColorMode } = useColorMode();
  const [modePreference, setModePreference] = useState("system");
  const headerBg = useColorModeValue("surface.light", "surface.dark");
  const headerBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const linkColor = useColorModeValue("text.mutedLight", "text.mutedDark");
  const linkHoverColor = useColorModeValue("text.light", "white");
  const logoSrc = useColorModeValue(
    "/images/logos/stemcycles-landscape-light-mode.png",
    "/images/logos/stemcycles-landscape-dark-mode.png"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(MODE_STORAGE_KEY);
    const initialPref =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system";
    setModePreference(initialPref);
    if (initialPref === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setColorMode(prefersDark ? "dark" : "light");
    } else {
      setColorMode(initialPref);
    }
  }, []);

  const applySystemPreference = () => {
    if (typeof window === "undefined") return;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    localStorage.setItem(MODE_STORAGE_KEY, "system");
    setModePreference("system");
    setColorMode(prefersDark ? "dark" : "light");
  };

  const cycleMode = () => {
    if (modePreference === "system") {
      setModePreference("light");
      localStorage.setItem(MODE_STORAGE_KEY, "light");
      setColorMode("light");
      return;
    }
    if (modePreference === "light") {
      setModePreference("dark");
      localStorage.setItem(MODE_STORAGE_KEY, "dark");
      setColorMode("dark");
      return;
    }
    applySystemPreference();
  };

  const modeIcon =
    modePreference === "system" ? (
      <FiMonitor />
    ) : modePreference === "light" ? (
      <SunIcon />
    ) : (
      <MoonIcon />
    );

  return (
    <Box
      bg={headerBg}
      px={4}
      shadow="sm"
      position="sticky"
      top={0}
      zIndex={100}
      borderBottomWidth="1px"
      borderColor={headerBorder}
      backdropFilter="blur(10px)"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
        mx="auto"
      >
        {/* Logo */}
        <HStack spacing={3}>
          <Link as={NextLink} href="/">
            <Image
              src={logoSrc}
              alt="STEMCYCLES Logo"
              h={60}
              objectFit="contain"
            />
          </Link>
        </HStack>

        {/* Desktop Navigation */}
        <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              as={link.isExternal ? "a" : NextLink}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              fontWeight="medium"
              color={linkColor}
              _hover={{ color: linkHoverColor }}
            >
              {link.label}
            </Link>
          ))}
        </HStack>

        {/* Right Controls */}
        <HStack spacing={2}>
          <IconButton
            aria-label="Cycle color mode"
            icon={modeIcon}
            onClick={cycleMode}
            variant="ghost"
            size="md"
          />
          {/* Mobile Menu Button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </HStack>
      </Flex>

      {/* Mobile Navigation */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                as={link.isExternal ? "a" : NextLink}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                fontWeight="medium"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

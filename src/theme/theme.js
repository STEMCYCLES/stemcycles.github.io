import { extendTheme } from "@chakra-ui/react";

// Respect user's OS preference by default; fall back to light.
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    // Neutral grey scale (primary brand colors)
    brand: {
      50: "#F8F9FA", // Nearly white
      100: "#E9ECEF", // Very light grey
      200: "#DEE2E6", // Light grey
      300: "#CED4DA", // Light-medium grey
      400: "#ADB5BD", // Medium grey
      500: "#6C757D", // Primary grey
      600: "#495057", // Medium-dark grey
      700: "#343A40", // Dark grey
      800: "#212529", // Very dark grey
      900: "#0F1419", // Nearly black
    },

    // STEMCYCLES brand green for icons and interactive elements
    accent: {
      50: "#E6F7F0",
      100: "#B3E8D4",
      200: "#80D9B8",
      300: "#4DCA9C",
      400: "#2BB673", // Brand light green
      500: "#2BB673", // Primary brand green
      600: "#229959",
      700: "#1A7A47",
      800: "#115C35",
      900: "#004928", // Brand dark green
    },

    // Cultivation Camps red accent (optional for CTAs)
    red: {
      50: "#FBE9E7",
      100: "#F5C4BE",
      200: "#EF9F95",
      300: "#E97A6C",
      400: "#E2645A", // Brand light red
      500: "#D13E2E", // Primary brand red
      600: "#C0392B",
      700: "#A93226",
      800: "#922B21",
      900: "#8E1913", // Brand dark red
    },

    // Semantic tokens for light/dark mode
    background: {
      light: "#F8F9FA", // Very light grey
      dark: "#0F1419", // Very dark grey (almost black)
    },
    surface: {
      light: "#FFFFFF", // Pure white for cards
      dark: "#1A1F26", // Dark grey for cards
    },
    text: {
      light: "#262222", // Much darker (nearly black) for better contrast
      dark: "#F8F9FA", // Light grey text on dark
      mutedLight: "#393f44", // Darker muted text
      mutedDark: "rgba(248, 249, 250, 0.8)", // Semi-transparent light
    },
  },

  fonts: {
    heading: `'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },

  styles: {
    global: (props) => ({
      "html, body, #__next": {
        height: "100%",
      },
      body: {
        bg: props.colorMode === "dark" ? "background.dark" : "background.light",
        color: props.colorMode === "dark" ? "text.dark" : "text.light",
        fontFamily: "body",
        transition: "background-color 0.3s ease, color 0.3s ease",
      },
      "::selection": {
        backgroundColor: props.colorMode === "dark" ? "brand.700" : "brand.200",
        color: props.colorMode === "dark" ? "text.dark" : "text.light",
      },
    }),
  },

  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Link: {
      baseStyle: (props) => ({
        color:
          props.colorMode === "dark" ? "text.mutedDark" : "text.mutedLight",
        fontWeight: "medium",
        _hover: {
          color: props.colorMode === "dark" ? "white" : "text.light",
          textDecoration: "none",
        },
      }),
    },
  },
});

export default theme;

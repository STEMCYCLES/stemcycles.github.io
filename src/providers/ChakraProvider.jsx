"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider as ChakraUIProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import theme from "../theme/theme";

export default function ChakraProvider({ children }) {
  return (
    <CacheProvider>
      <ChakraUIProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraUIProvider>
    </CacheProvider>
  );
}

import ChakraProvider from "../providers/ChakraProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "STEMCYCLES | Empowering Through STEM",
  description:
    "Founded in 2021, STEMCYCLES is a 501(c)(3) nonprofit focused on STEM teaching and training. We provide industry-level knowledge and hands-on experiences to underrepresented students from K–12 and beyond, building a foundation for college, careers, and life—then we repeat the Cycle!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ChakraProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { siteMetadata } from "@/constants/metadata";
import { WrapperClerkProviders } from "@/providers/clerk-provider";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="linear-gradient(to right, var(--bg-violet), var(--bg-pink))"
          height={2.5}
          crawlSpeed={200}
          showSpinner={false}
          easing="ease"
          speed={300}
        />
        <Toaster position="bottom-right" />

        <WrapperClerkProviders>
          <Navbar />
          {children}
          <Footer />{" "}
        </WrapperClerkProviders>
      </body>
    </html>
  );
}

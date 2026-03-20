import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
// components
import FloatingDock from "@/components/FloatingDock"
import MobileNav from "@/components/MobileNav"
import PageTransition from "@/components/PageTransition"
import RectangleTransition from "@/components/RectangleTransition";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: {
    template: "%s | Harry's Portfolio",
    default: "Harry's Portfolio"
  },
  description: "Portfolio của Bảo Huỳnh (Harry), lập trình viên Front-end. Khám phá để biết thêm về tôi và các kỹ năng của tôi.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="font-primary antialiased cursor-none">
        <LanguageProvider>
          <CustomCursor />
          <RectangleTransition />
          <PageTransition>
            <LanguageSwitcher />
            {/* Mobile Navigation */}
            <MobileNav />

            {/* Main Content */}
            <div className="fixed z-0 w-full h-[60%] -right-[50%] rounded-full blue__gradient"></div>
            <div className="fixed z-0 w-full h-[60%] right-[50%] rounded-full blue__gradient"></div>

            <div className="w-full min-h-screen">
              <div className="px-6 md:px-10 mx-auto pt-20 md:pt-8 pb-24">
                {children}
              </div>
            </div>

            {/* Floating Dock - Desktop Only */}
            <FloatingDock />
          </PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}

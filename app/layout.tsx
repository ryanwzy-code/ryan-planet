import type { ReactNode } from "react";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

export const metadata = {
  title: "My First Vibe Coding Attempt",
  description: "Ryan's first attempt at coding, now powered by Next.js and Radix."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

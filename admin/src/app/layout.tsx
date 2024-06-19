"use client"
import { Inter } from "next/font/google";
import { PersonProvider } from "./services/providers/employeeProvider";
import { SkillProvider } from "./services/providers/skillProvider";
import { RefListProvider } from "./services/providers/refListProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <PersonProvider>
        <SkillProvider>
          <RefListProvider>
            <html lang="en">
               <body className={inter.className}>{children}</body>
            </html>
          </RefListProvider>
        </SkillProvider>
      </PersonProvider>
  );
}

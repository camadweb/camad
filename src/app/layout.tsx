import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ['latin'],
   variable: '--font-dm-sans' 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CAMAD » Volunteer Today!",
  description: "Help preserve the story of Machynlleth. Join CAMAD as a volunteer and take part in projects that protect and share our town’s heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${dmSans.variable} ${geistMono.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

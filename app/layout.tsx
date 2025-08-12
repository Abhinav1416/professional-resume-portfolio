import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Gudipudi Sasanka Abhinav - Full-Stack Developer",
  description:
    "Professional portfolio of Gudipudi Sasanka Abhinav, a full-stack developer specializing in Java Spring Boot, React.js, and modern web technologies.",
  keywords: "Full-Stack Developer, Java, Spring Boot, React.js, TypeScript, Microservices, Software Engineer",
  authors: [{ name: "Gudipudi Sasanka Abhinav" }],
  creator: "Gudipudi Sasanka Abhinav",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gudipudi Sasanka Abhinav - Full-Stack Developer",
    description:
      "Professional portfolio showcasing full-stack development expertise in Java, React.js, and modern web technologies.",
    siteName: "Gudipudi Sasanka Abhinav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gudipudi Sasanka Abhinav - Full-Stack Developer",
    description:
      "Professional portfolio showcasing full-stack development expertise in Java, React.js, and modern web technologies.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

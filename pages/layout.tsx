import type React from "react"
import type { Metadata } from "next"
// import { montserrat } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jumeirah - Burj Al Arab ",
  // description: "We are a Next-Generation Software Company Providing!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // return (
  //   // <html lang="en" className={montserrat.variable}>
  //   //   <body className={montserrat.className}>{children}</body>
  //   // </html>
  // )
}

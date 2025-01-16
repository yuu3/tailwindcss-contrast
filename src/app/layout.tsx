import type { Metadata } from "next"
import { Header } from "@/app/_components/Header"
import { Footer } from "@/app/_components/Footer"
import "./index.css"

export const metadata: Metadata = {
  title: "TailwindCSS Contrast Checker",
  description: "Contrast checker for TailwindCSS.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      "./ogp.png"
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

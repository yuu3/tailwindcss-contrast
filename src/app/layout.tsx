import type { Metadata } from "next"
import Head from 'next/head'
import { Header } from "@/app/_components/Header"
import { Footer } from "@/app/_components/Footer"
import "./index.css"

export const metadata: Metadata = {
  title: "TailwindCSS Contrast Checker",
  description: "Contrast checker for TailwindCSS.",
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="TailwindCSS Contrast Checker" />
        <meta property="og:description" content="Contrast checker for TailwindCSS." />
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:url" content="https://tailwindcss-contrast.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name='twitter:title' content='TailwindCSS Contrast Checker' />
        <meta name='twitter:description' content='Contrast checker for TailwindCSS.' />
        <meta name='twitter:image' content='/ogp-card.png' />
      </Head>
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

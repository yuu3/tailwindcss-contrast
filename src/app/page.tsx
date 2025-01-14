"use client"

import { useState } from "react"
import { BackgroundColor } from "@/app/_components/BackgroundColor"
import { TextColor } from "@/app/_components/TextColor"
import { Contrast } from "@/app/_components/Contrast"

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState("")
  const [textColor, setTextColor] = useState("")

  return (
    <main className="w-full max-w-3xl mx-auto grid gap-y-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BackgroundColor onChange={(color) => setBackgroundColor(color)} />
        <TextColor onChange={(color) => setTextColor(color)} />
      </div>
      <Contrast backgroundColor={backgroundColor} textColor={textColor} />
    </main>
  )
}

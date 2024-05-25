"use client"

import { useState } from "react"
import { ColorCode } from "@/app/_components/ColorCode"
import { ColorPallete } from "@/app/_components/ColorPallete"

export default function Home() {
  const [color, setColor] = useState('FFFFFF')

  return (
    <main className="w-full max-w-6xl mx-auto px-4">
      <ColorCode
        color={color}
        changeColor={setColor}
      />
      <ColorPallete color={color} />
    </main>
  )
}

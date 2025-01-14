"use client"

import { useEffect, useState } from "react"
import { ColorName } from "@/app/_components/ColorName"
import { ColorValue } from "@/app/_components/ColorValue"
import colors from "@/colors.json"

type Props = {
  onChange: (color: string) => void;
}

export const TextColor = (props: Props) => {
  const [colorName, setColorName] = useState("black")
  const [colorValue, setColorValue] = useState("")
  const [color, setColor] = useState("")
  
  useEffect(() => {
    const color = colors.find((color) => color.name === colorName)

    if (["black", "white"].includes(colorName) && color?.color) {
      setColor(color.color)
      setColorValue("")
      props.onChange(color.color)
    } else if (color) {
      if (!color.codes) return
      if (!colorValue) setColorValue("500")

      const code = color.codes.find((code) => code.name === colorValue)

      if (code) {
        setColor(code.color)
        props.onChange(code.color)
      }
    }
  }, [colorName, colorValue])

  return (
    <div className="grid gap-y-4 p-4 border border-gray-300 rounded-lg">
      <p>Text Color</p>
      <div className="flex gap-x-2">
        <ColorName
          value={colorName}
          onChange={(colorName) => setColorName(colorName)}
        />
        <ColorValue
          value={colorValue}
          disabled={["black", "white"].includes(colorName)}
          onChange={(colorValue) => setColorValue(colorValue)}
        />
      </div>
      <div className="flex gap-x-2 items-center">
        <div
          style={{ backgroundColor: color}}
          className="p-4 rounded-lg"
        ></div>
        <p className="text-sm">{color}</p>
      </div>
    </div>
  )
}

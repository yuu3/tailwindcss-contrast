"use client"

import { CompactPicker } from "react-color"

interface Props {
  color: string;
  changeColor: (color: string) => void;
}

export const ColorCode = (props: Props) => {
  return (
    <div className="sticky top-0 py-4 mx-auto flex justify-center bg-white">
      <CompactPicker
        color={props.color}
        onChange={(color) => props.changeColor(color.hex)}
      />
    </div>
  )
}

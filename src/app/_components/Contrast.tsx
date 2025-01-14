import { Check, X } from "lucide-react"
import { getContrastRatio } from "@/contrast"

type Props = {
  backgroundColor: string;
  textColor: string;
}

const Result = (props: { ratio: number; passRatio: number; }) => {
  const pass = props.ratio >= props.passRatio

  return (
    <div className={`${pass ? "text-green-700" : "text-red-700"} flex items-center gap-x-2 justify-center`}>
      {pass ? <Check size={16} /> : <X size={16} />}
      <p className="text-center">{pass ? "Pass" : "Faild"}</p>
    </div>
  )
}

export const Contrast = (props: Props) => {
  const rario = getContrastRatio(props.backgroundColor, props.textColor)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg border border-gray-300">
      <p className="col-span-1 sm:col-span-2">Contrast Ratio: {rario}</p>
      <div className="self-stretch max-w-fit grid grid-cols-3 gap-y-1">
        <div className="col-span-full grid-cols-subgrid grid gap-2 border-b border-gray-300 p-2 text-xs text-gray-700">
          <p>Type</p>
          <p className="text-center">AA</p>
          <p className="text-center">AAA</p>
        </div>
        <div className="col-span-full grid-cols-subgrid grid gap-2 border-b border-gray-300 p-2 text-sm">
          <p>Large Text</p>
          <Result ratio={rario} passRatio={3} />
          <Result ratio={rario} passRatio={4.5} />
        </div>
        <div className="col-span-full grid-cols-subgrid grid gap-2 border-b border-gray-300 p-2 text-sm">
          <p>Small Text</p>
          <Result ratio={rario} passRatio={4.5} />
          <Result ratio={rario} passRatio={7} />
        </div>
        <div className="col-span-full grid-cols-subgrid grid gap-2 p-2 text-sm">
          <p>UI Component</p>
          <Result ratio={rario} passRatio={3} />
          <Result ratio={rario} passRatio={3} />
        </div>
      </div>
      <div style={{ backgroundColor: props.backgroundColor, color: props.textColor }} className="p-4 rounded-lg">
        <p style={{ color: props.textColor }}>
          This is sample text. Use it to check the contrast ratio.
        </p>
      </div>
    </div>
  )
}

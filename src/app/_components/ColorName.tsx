import ColorPallet from "@/colors.json"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"

type Props = {
  value: string
  onChange: (colorName: string) => void
}

export const ColorName = (props: Props) => {
  const names = ColorPallet.map((colorName) => colorName.name)

  return (
    <Select defaultValue={props.value} onValueChange={(value) => props.onChange(value)}>
      <SelectTrigger className="w-32 bg-white">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {names.map((name) => (
          <SelectItem key={name} value={name}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
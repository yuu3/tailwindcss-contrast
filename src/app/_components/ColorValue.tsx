import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"

type Props = {
  value: string
  disabled: boolean
  onChange: (colorName: string) => void
}

const values = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950'
]

export const ColorValue = (props: Props) => {
  return (
    <Select value={props.value} disabled={props.disabled} onValueChange={(value) => props.onChange(value)}>
      <SelectTrigger className="w-24 bg-white">
        <SelectValue placeholder="Value" />
      </SelectTrigger>
      <SelectContent>
        {values.map((value) => (
          <SelectItem key={value} value={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
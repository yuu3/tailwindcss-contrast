import colorPallete from "@/colorPallete.json"
import { getContrastRatio } from "@/contrast"

interface Props {
  color: string;
}

const isA11y = (ratio: number) => {
  if (ratio >= 7) return 'text-emerald-500'
  if (ratio >= 4.5) return 'text-gray-700'

  return 'text-red-500'
}

const ContrastRatio = (props: { selectedColor: string, color: string }) => {
  const rario = getContrastRatio(props.selectedColor, props.color)
  return (
    <div className="text-xs text-gray-700">
      <p>Contrast Ratio:</p>
      <p className={`${isA11y(rario)} `}>{rario}</p>
    </div>
  )
}

export const ColorPallete = (props: Props) => {
  return (
    <main>
      <ul className="grid grid-cols-1 gap-8">
        {colorPallete.map((color, index) => {
          return (
            <li
              key={index}
              className="grid gap-y-2"
            >
              <p className="text-gray-700">{color.name}</p>
              <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-4">
                {color.codes.map((colorCode, index) => {
                  return (
                    <li
                      key={index}
                      className="grid gap-y-1 content-start"
                    >
                      <div
                        style={{ backgroundColor: colorCode.color }}
                        className="aspect-video rounded"
                      />
                      <p className="text-xs">{colorCode.name}</p>
                      <p className="text-xs text-gray-700">{colorCode.color}</p>
                      <ContrastRatio
                        selectedColor={props.color}
                        color={colorCode.color}
                      />
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

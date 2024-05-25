const hexToRgb = (hex: string) => {
  try {
    return hex.match(/[^#]{2}/g)!.map(rgb => parseInt(rgb, 16))
  } catch (error) {
    return [255, 255, 255]
  }
}

const getRGBForRelativeLuminance = (param: number) => {
  const sRGB = param / 255

  if (sRGB <= 0.03928) return sRGB / 12.92

  return Math.pow(((sRGB + 0.055) / 1.055), 2.4)
}

const getRelativeLuminance = (hex: string) => {
  const rgb = hexToRgb(hex)

  const R = getRGBForRelativeLuminance(rgb[0])
  const G = getRGBForRelativeLuminance(rgb[1])
  const B = getRGBForRelativeLuminance(rgb[2])

  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

export const getContrastRatio = (hex: string, selectedColor: string) => {
  const l1 = getRelativeLuminance(hex)
  const l2 = getRelativeLuminance(selectedColor)
  const bright = Math.max(l1, l2)
  const dark = Math.min(l1, l2)

  return Math.round((bright + 0.05) / (dark + 0.05) * 100) / 100
}

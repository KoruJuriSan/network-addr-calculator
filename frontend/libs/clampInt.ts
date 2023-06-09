export default function clampInt(number: number, min: number, max: number) {
    const integer = number
    if (integer > max) return max
    if (integer < min) return min
    return integer || 0
}
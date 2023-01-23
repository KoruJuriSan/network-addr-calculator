module.exports = function clampInt(number, min, max) {
    if (typeof number != "number") throw new TypeError("The value should be an integer.")
    if (typeof min != "number") throw new TypeError("The minimum should be an integer.")
    if (typeof max != "number") throw new TypeError("The maximum should be an integer.")

    const integer = parseInt(number)
    if (integer > max) return max
    if (integer < min) return min
    return integer || 0
}
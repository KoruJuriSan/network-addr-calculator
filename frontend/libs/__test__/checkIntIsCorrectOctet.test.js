/* eslint-disable */
const checkIntIsCorrectOctet = require("../checkIntIsCorrectOctet.js")

test("Argument : number return a number between 0-255 that is a correct mask arondit vers le bas", () => {
    expect(checkIntIsCorrectOctet(0)).toStrictEqual(0)
    expect(checkIntIsCorrectOctet(255)).toStrictEqual(255)
    expect(checkIntIsCorrectOctet(128)).toStrictEqual(128)
    expect(checkIntIsCorrectOctet(127)).toStrictEqual(128)
    expect(checkIntIsCorrectOctet(254)).toStrictEqual(254)
})
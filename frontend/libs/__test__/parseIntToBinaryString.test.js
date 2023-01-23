/* eslint-disable no-undef */
const parseIntToBinaryString = require("../parseIntToBinaryString.js")

test("Argument : number return its binary in a string.", () => {
    expect(parseIntToBinaryString(1)).toStrictEqual("1")
    expect(parseIntToBinaryString(0)).toStrictEqual("0")
    expect(parseIntToBinaryString(255)).toStrictEqual("11111111")
    expect(parseIntToBinaryString(49)).toStrictEqual("110001")
})
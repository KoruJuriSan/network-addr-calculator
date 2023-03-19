/* eslint-disable no-undef */
const calculateAvailableAddr = require("../calculateAvailableAddrs.js")

test("Argument : number 0-30 (CIDR) return avalaible addr ([00000000, 0000000, 0000000, 00000000]-[11111111, 11111111, 11111111, 11111111])", () => {
    expect(calculateAvailableAddr(32)).toStrictEqual(["00000000", "00000000", "00000000", "00000000"])
    expect(calculateAvailableAddr(0)).toStrictEqual(["11111111", "11111111", "11111111", "11111111"])
    expect(calculateAvailableAddr(22)).toStrictEqual(["00000000", "00000000", "00000011", "11111111"])
    expect(calculateAvailableAddr(16)).toStrictEqual(["00000000", "00000000", "11111111", "11111111"])
})
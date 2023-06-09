/* eslint-disable no-undef */
import parseSubnetToCIDR from "../parseSubnetToCIDR.js"

test("Argument : number return its binary in a string.", () => {
    //expect(() => parseSubnetToCIDR([255, 255, 0, 255])).toThrow("Invalid subnet mask.")
    expect(parseSubnetToCIDR([255, 255, 255, 255])).toStrictEqual(32)
    expect(parseSubnetToCIDR([0, 0, 0, 0])).toStrictEqual(0)
    expect(parseSubnetToCIDR([255, 255, 255, 0])).toStrictEqual(24)
})
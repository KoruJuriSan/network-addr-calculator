/* eslint-disable no-undef */
import calculateBroadcastAddr from "../calculateBroadcastAddr"

test("Arguments : addr ([255, 255, 255, 255]-[0, 0, 0, 0]), CIDR (0-30) and we get the last addr of the network.", () => {
    expect(() => calculateBroadcastAddr([192, 168, 0, 0], 34)).toThrow("Invalid subnet mask.")
    expect(calculateBroadcastAddr([192, 168, 0, 0], 16)).toStrictEqual([192, 168, 255, 255])
    expect(calculateBroadcastAddr([192, 168, 0, 0], 0)).toStrictEqual([255, 255, 255, 255])
    expect(calculateBroadcastAddr([10, 76, 45, 12], 17)).toStrictEqual([10, 76, 127, 255])
})
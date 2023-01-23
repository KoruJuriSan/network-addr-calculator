/* eslint-disable no-undef */
const calculateNetworkAddr = require("../calculateNetworkAddr.js")

test("Arguments : addr ([255, 255, 255, 255]-[0, 0, 0, 0]), CIDR (0-30) and we get the last addr of the network.", () => {
    expect(calculateNetworkAddr([192, 168, 0, 0], 16)).toStrictEqual([192, 168, 0, 0])
    expect(calculateNetworkAddr([192, 168, 0, 0], 0)).toStrictEqual([0, 0, 0, 0])
    expect(calculateNetworkAddr([10, 76, 45, 12], 17)).toStrictEqual([10, 76, 0, 0])
})
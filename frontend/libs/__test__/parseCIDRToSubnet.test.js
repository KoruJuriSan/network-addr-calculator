/* eslint-disable no-undef */
const parseCIDRToSubnet = require("../parseCIDRToSubnet.js")

test("Argument : number 0-30 (CIDR) return [255, 255, 255, 255]-[0, 0, 0, 0]", () => {
    expect(parseCIDRToSubnet(24)).toStrictEqual([255, 255, 255, 0])
    expect(parseCIDRToSubnet(26)).toStrictEqual([255, 255, 255, 192])
    expect(parseCIDRToSubnet(11)).toStrictEqual([255, 224, 0, 0])
})
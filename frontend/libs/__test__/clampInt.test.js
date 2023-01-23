/* eslint-disable no-undef */
const clampInt = require("../clampInt.js")

test(`
Arguments : the value to test, the min value and the maximum that the value can go to.
the output is expect be the value, the max or the min, if the value, min or max is not an int it will trhow a new TypeError
`, () => {
    expect(clampInt(1, 0, 2)).toStrictEqual(1)
    expect(clampInt(-3, 0, 2)).toStrictEqual(0)
    expect(clampInt(12, 0, 2)).toStrictEqual(2)
    expect(() => clampInt("nothing", 0, 2)).toThrow("The value should be an integer.")
    expect(() => clampInt(12, "nothing", 20)).toThrow("The minimum should be an integer.")
    expect(() => clampInt(12, 0, "nothing")).toThrow("The maximum should be an integer.")
})
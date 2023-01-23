const clampInt = require("./clampInt")

module.exports = function checkIntIsCorrectOctet(number) {
    if (typeof number != "number") throw new TypeError("The number should be an integer.")
    if (0 >= number || number >= 255) return clampInt(number, 0, 255)
    let suite = 0
    for (let exposant = 7; exposant >= 0; exposant--) {
        suite += 2**exposant
        if (suite >= number) return suite
    }
}
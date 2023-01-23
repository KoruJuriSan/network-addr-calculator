const getAvaibleAddressesList = require("./calculateAvailableAddrs.js")

module.exports = function calculateBroadcastAddr(networkAddress, CIDR) {
    if (CIDR > 30 || 0 > CIDR) throw new Error("Invalid subnet mask.")
    let broadcastAddress = []
    let avaibleAddressesList = getAvaibleAddressesList(CIDR)
    for (let i = 0; i < 4; i++) {
        broadcastAddress.push(networkAddress[i] | parseInt(avaibleAddressesList[i], 2))
    }
    return broadcastAddress
}
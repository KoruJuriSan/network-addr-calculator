const parseCIDRToSubnet = require("./parseCIDRToSubnet.js")

module.exports = function calculateNetworkAddr(ip, CIDR) {
    if (typeof ip != "object") throw new TypeError("The ip should be an object.")

    const subnet = parseCIDRToSubnet(CIDR)
    return ip.map((value, index) => {
        return value & subnet[index]
    })
}
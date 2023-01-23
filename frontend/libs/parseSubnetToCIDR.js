module.exports = function parseSubnetToCIDR(Subnet) {
    let CIDR = 0
    Subnet.map(e => parseInt(e)).forEach(number => {
        if (number == 255) {
            CIDR += 8
        } else  {
            CIDR += (((number).toString(2)).match(/1/g) || []).length
            return CIDR
        } 
    })
    return CIDR
}
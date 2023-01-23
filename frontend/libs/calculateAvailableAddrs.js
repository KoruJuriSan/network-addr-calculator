module.exports = function calculateAvailableAddrs(CIDR){
    let addressRangeBin = "0".repeat(CIDR) + "1".repeat(32-CIDR)
    let addressRangeList = []
    for (let i = 0; i < 32; i += 8) {
        addressRangeList.push(addressRangeBin.slice(i, i+8))
    }
    return addressRangeList
}
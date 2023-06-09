export default function calculateAvailableAddrs(CIDR: number): [string, string, string, string] {
    let addressConcatenatedBin: string = "0".repeat(CIDR) + "1".repeat(32-CIDR)
    let addressBinList: [string, string, string, string] = ["", "", "", ""]
   addressBinList = addressBinList.map((octet, key) => {
        return addressConcatenatedBin.slice(key*8, (key*8)+8)
    }) as [string, string, string, string]
    return addressBinList
}


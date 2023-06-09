import parseCIDRToSubnet from "./parseCIDRToSubnet"

export default function calculateNetworkAddr(ip: number[] , CIDR: number) {
    const subnet: [number, number, number, number] = parseCIDRToSubnet(CIDR)
    return ip.map((value, index) => {
        return value & subnet[index]!
    })
}
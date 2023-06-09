import calculateAvailableAddrs from "./calculateAvailableAddrs"

export default function calculateBroadcastAddr(networkAddress: [number, number, number, number], CIDR: number): [number, number, number, number] {
    if (CIDR > 30 || 0 > CIDR) throw new Error("Invalid subnet mask.")
    let broadcastAddress: [number, number, number, number] = [0, 0, 0, 0]
    let avaibleBits: [string, string, string, string] = calculateAvailableAddrs(CIDR)
    broadcastAddress = broadcastAddress.map((element, key) => {
        return networkAddress[key]! | parseInt(avaibleBits[key]!, 2)
    }) as [number, number, number, number]
    return broadcastAddress
}
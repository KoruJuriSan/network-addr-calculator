export default function parseCIDRToSubnet(CIDR: number): [number, number, number, number] {
    let reste = CIDR%8
    let quotient = (CIDR - reste)/8
    let subnetMask: [number, number, number, number] = [0, 0, 0, 0]
    let index = 0
    for (index; index < quotient; index++) {
        subnetMask[index] = 255
    }
    subnetMask[index] = parseInt("1".repeat(reste) + "0".repeat(8 - reste), 2)
    return subnetMask
}
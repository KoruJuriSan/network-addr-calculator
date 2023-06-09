export default function parseSubnetToCIDR(subnet: number[]) {
    let CIDR = 0
    subnet.forEach((octet: number) => {
        if (octet == 255) {
            CIDR += 8
        } else  {
            CIDR += (((octet).toString(2)).match(/1/g) || []).length
            return CIDR
        } 
    })
    return CIDR
}
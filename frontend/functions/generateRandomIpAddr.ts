import getRandomInt from "./generateRandomInt"

export default function generateRandomIpv4List () {
    let IpAddress = [10]
    for (let i = 0; i < 3; i++) {
        IpAddress.push(getRandomInt(256))
    }
    return IpAddress
}
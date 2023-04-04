const React = require("react")
const PropTypes = require("prop-types")
const parseSubnetToCIDR = require("../../../libs/parseSubnetToCIDR")
const calculateNetworkAddr = require("../../../libs/calculateNetworkAddr")
const calculateBroadcastAddr = require("../../../libs/calculateBroadcastAddr")
const CalculatorIpv4Title = require("./calculatorIpv4Title")

function AnswerIpv4({Addr, SubMask}) {

    const data = React.useMemo(() => {
        const CIDR = parseSubnetToCIDR(SubMask.map((e) => e.octet))
        const addrArray = [Addr[0].octet, Addr[1].octet, Addr[2].octet, Addr[3].octet]
        const title = addrArray.join(".") + "/" + CIDR
        const netId = CIDR
        const hostId = 32 - CIDR
        const ipRange = [[calculateNetworkAddr(addrArray, CIDR).join(".")], calculateBroadcastAddr(addrArray, CIDR).join(".")]
        // usefull ip range
        const addrs = 2**hostId
        const hosts = addrs-2
        return {title, netId, hostId, ipRange, hosts, addrs}
    }, [])

    return (
        <div className=" flex flex-col relative rounded-lg w-96 h-72">
            <div className=" flex flex-col gap-10">
                <div className=" flex flex-col gap-4">
                    <div className="flex items-end gap-16">
                        <CalculatorIpv4Title value={data.title} />
                        <div className=" flex gap-5">
                            <h3>netId: <span className=" font-bold">{data.netId}</span></h3>
                            <h3>hostId: <span className=" font-bold">{data.hostId}</span></h3>
                        </div>
                    </div>
                    <h3 className=" w-full text-xl">{"adresses disponible : "} <span className=" absolute right-0 font-bold">{data.hosts}</span></h3>
                    <h3 className=" w-full text-xl">{"hôtes disponible : "} <span className=" absolute right-0 font-bold">{data.hosts}</span></h3>
                </div>
                <div className=" flex flex-col gap-4">
                    <CalculatorIpv4Title value="Plage Ip" />
                    <h3 className=" w-full text-xl">{data.ipRange[0] + " -> " + data.ipRange[1]}</h3>
                </div>
            </div>
        </div>
    )
}

AnswerIpv4.propTypes = {
    isOpen: PropTypes.bool,
    Addr: PropTypes.array,
    SubMask: PropTypes.array
}

module.exports = AnswerIpv4
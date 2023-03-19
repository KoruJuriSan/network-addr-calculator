const React = require("react")
const PropTypes = require("prop-types")
const useToggle = require("../../../hooks/useToggle")
const parseSubnetToCIDR = require("../../../libs/parseSubnetToCIDR")
const calculateNetworkAddr = require("../../../libs/calculateNetworkAddr")
const calculateBroadcastAddr = require("../../../libs/calculateBroadcastAddr")

function CalculatorIpv4CallToAction({value, Addr, SubMask}) {

    const [isWidgetOpen, toggleisWidgetOpen] = useToggle(false)
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
    }, [isWidgetOpen])

    return (
        isWidgetOpen ? <div className=" bg-white w-126 h-126 flex flex-col relative rounded-lg">
            <button className=" absolute right-3 text-3xl text-black opacity-20" onClick={toggleisWidgetOpen}>x</button>
            <div className=" p-8 flex flex-col gap-12">
                <div className="flex items-end justify-between">
                    <h2 className=" font-bold text-xl underline">{data.title}</h2>
                    <div className=" flex gap-5">
                        <h3>netId: <span className=" font-bold text-primaryDarken">{data.netId}</span></h3>
                        <h3>hostId: <span className=" font-bold text-primaryDarken">{data.hostId}</span></h3>
                    </div>
                </div>
                <div className=" flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h4 className=" text-sm font-bold">Plage Ip:</h4>
                        <div>
                            <span className=" text-primary">{data.ipRange[0]}</span>
                            <span>{" -> "}</span>
                            <span className=" text-secondary">{data.ipRange[1]}</span>
                        </div>
                    </div>
                    <hr className=" opacity-30" />

                    {/*<div className="flex justify-between">
                        <h4 className=" text-sm font-bold">Plage ip utile:</h4>
                        <div>
                            <span className=" text-primary">{data.ipRange[0]}</span>
                            <span>{" -> "}</span>
                            <span className=" text-secondary">{data.ipRange[1]}</span>
                        </div>
                    </div>
                    <hr className=" opacity-30" />*/}

                    <div className="flex justify-between">
                        <h4 className=" text-sm font-bold">{"Nombre d'hôtes:"}</h4>
                        <span className=" text-primary">{data.hosts}</span>
                    </div>
                    <hr className=" opacity-30" />

                    <div className="flex justify-between">
                        <h4 className=" text-sm font-bold">{"Nombre d'adresse:"}</h4>
                        <span className=" text-primary">{data.addrs}</span>
                    </div>
                    <hr className=" opacity-30" />
                </div>
            </div>
        </div> : <div className=" flex items-center">
            <button className=" text-white bold text-2xl border-2 rounded-lg px-5 py-1 relative before:w-full before:h-full before:block before:absolute before:left-0 before:top-0 before:shadow-white before:rounded-md before:shadow-lg before:opacity-25 hover:before:opacity-40" onClick={toggleisWidgetOpen}>
                {value}
            </button>
        </div>
    )
}

CalculatorIpv4CallToAction.propTypes = {
    value: PropTypes.string,
    Addr: PropTypes.array,
    SubMask: PropTypes.array
}

module.exports = CalculatorIpv4CallToAction
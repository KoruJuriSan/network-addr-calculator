import React from "react"
import useToggle from "../../../hooks/useToggle"
import parseSubnetToCIDR from "../../../libs/parseSubnetToCIDR"
import calculateNetworkAddr from "../../../libs/calculateNetworkAddr"
import calculateBroadcastAddr from "../../../libs/calculateBroadcastAddr"
import Button from "../../../components/button"
import CalculatorIpv4Title from "./calculatorIpv4Title"

interface addresse {
    octet: number,
    setOctet: (value: number) => void,
    handleValueEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface Props {
    value: string,
    addr: [addresse, addresse, addresse, addresse],
    submask: [addresse, addresse, addresse, addresse]
}

export default function CalculatorIpv4CallToAction({value, addr, submask}: Props) {

    const [isWidgetOpen, toggleisWidgetOpen] = useToggle(false)
    const data = React.useMemo(() => {
        const CIDR = parseSubnetToCIDR(submask.map((e) => e.octet))
        const addrArray: [number, number, number, number] = [addr[0].octet, addr[1].octet, addr[2].octet, addr[3].octet]
        const title: string = addrArray.join(".") + "/" + CIDR
        const netId: number = CIDR
        const hostId: number = 32 - CIDR
        const ipRange: [string, string] = [calculateNetworkAddr(addrArray, CIDR).join("."), calculateBroadcastAddr(addrArray, CIDR).join(".")]
        // usefull ip range
        const addrs: number = 2**hostId
        const hosts: number = addrs-2
        return {title, netId, hostId, ipRange, hosts, addrs}
    }, [isWidgetOpen])

    return (
        isWidgetOpen ? <div className=" flex flex-col relative rounded-lg">
            <Button.BtnFN onClick={toggleisWidgetOpen}> Reset</Button.BtnFN>
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
        </div> : <div className=" flex items-center">
            <Button.BtnFN onClick={toggleisWidgetOpen}>{value}</Button.BtnFN>
        </div>
    )
}
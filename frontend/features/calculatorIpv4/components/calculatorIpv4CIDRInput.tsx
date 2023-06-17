import React from "react"
import parseCIDRToSubnet from "../../../libs/parseCIDRToSubnet"
import parseSubnetToCIDR from "../../../libs/parseSubnetToCIDR"
import clampInt from "../../../libs/clampInt"

interface addresse {
    octet: number,
    setOctet: (value: number) => void,
    handleValueEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type newSubmask = [number, number, number, number]

interface Props {
    submask: addresse[]
}

export default function CalculatorIpv4CIDRInput({submask}: Props) {
    const value: string = React.useMemo(() => {
        return parseSubnetToCIDR(submask.map((element) => element.octet)).toString()
    }, [submask])

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let value: number = parseInt(event.target.value)
        value = clampInt(value, 0, 30)
        const newSubmask: newSubmask = parseCIDRToSubnet(value)
        submask.forEach((element, key) => {
            element.setOctet(newSubmask[key]!)
        })
    }, [])
    
    return (
        <input type="text" className={`w-16 text-xl text-center rounded-md bg-transparent border-2`} value={value} onChange={handleChange}/>
    )
}
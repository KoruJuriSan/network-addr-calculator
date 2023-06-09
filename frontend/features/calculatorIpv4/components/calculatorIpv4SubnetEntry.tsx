import React from "react"
import checkIntIsCorrectOctet from "../../../libs/checkIntIsCorrectOctet"

interface Props {
    value: number,
    setValue: (value: number) => void,
    isBinary?: boolean,
    upperValue?: number,
    resetsValue?: { (value: number): void }[], 
}

const styles: string = "text-center rounded-md bg-transparent bg-opacity-0 border-2"
const stylesBaseTen: string = "w-16 text-xl"
const stylesBiary: string = "w-20 text-sm"

export default function CalculatorIpv4SubnetEntry({value, setValue, isBinary, upperValue = 255, resetsValue = []}: Props) {
    const base = React.useMemo(() => {
        return isBinary ? 2 : 10
    }, [isBinary])
    
    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = parseInt(event.target.value, base)
        if (upperValue == 255) {setValue(newValue)}
        resetsValue.forEach((element: (value: number) => void) => {
            element(0)
        })
    }, [upperValue])

    const handleLeave = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newOctet: number = parseInt(event.target.value, base)
        setValue(checkIntIsCorrectOctet(newOctet))
    }, [setValue])
    
    return (
        <input type="text" className={`${isBinary ? stylesBiary : stylesBaseTen} ${styles}`} value={value.toString(base)} onBlur={handleLeave} onChange={handleChange}/>
    )
}
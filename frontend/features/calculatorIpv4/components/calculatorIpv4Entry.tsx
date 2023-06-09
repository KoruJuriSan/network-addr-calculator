import React from "react"

interface Props {
    value: number,
    setValue: (value: number) => void,
    leaveTestValue?: (value: number) => number,
    changeTestValue?: (value: number) => void,
    isBinary?: boolean
}

export default function CalculatorIpv4Entry({value, setValue, leaveTestValue, isBinary}: Props) {

    const base = React.useMemo(() => {
        return isBinary ? 2 : 10
    }, [isBinary])
    
    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = parseInt(event.target.value, base)
        setValue(newValue)
    }, [])

    const handleLeave = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (leaveTestValue) setValue(leaveTestValue(parseInt(event.target.value)))
    }, [setValue])
    
    return (
        <input type="text" className={`${isBinary ? " w-20 text-sm" : "w-16 text-xl"} text-center rounded-md bg-transparent border-2`} value={value.toString(base)} onBlur={handleLeave} onChange={handleChange}/>
    )
}
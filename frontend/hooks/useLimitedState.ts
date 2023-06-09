import React from "react"

interface limitedValue {
    value: number,
    setLimitedValue: (value: number) => void,
    ValueEventHandler: (value: number) => void
}

export default function useLimitedState(initialValue: number, minValue: number = 0,maxValue: number = 999) {
    const [value, setValue] = React.useState(initialValue)

    function setLimitedValue(value: number) {
        if (value >= minValue && value <= maxValue) {
            setValue(value)
        } else {
            if (value > maxValue) setValue(maxValue)
            if (value < minValue || isNaN(value)) setValue(minValue)
        }
    }

    function valueEventHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        console.log(parseInt(event.target.value))
        setLimitedValue(parseInt(event.target.value))
    }
    let result: [number, (value: number) => void, (event: React.ChangeEvent<HTMLInputElement>) => void]
    result = [value, setLimitedValue, valueEventHandler]
    return result
}
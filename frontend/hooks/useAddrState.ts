import useLimitedState from "./useLimitedState"

interface addresse {
    octet: number,
    setOctet: (value: number) => void,
    handleValueEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function useAddrState(): [addresse, addresse, addresse, addresse] {
    const [firstOctet, setFirstOctet, firstOctetValueHandler] = useLimitedState(0, 0, 255)
    const [secondOctet, setSecondOctet, secondOctetValueHandler] = useLimitedState(0, 0, 255)
    const [thirdOctet, setThirdOctet, thirdOctetValueHandler] = useLimitedState(0, 0, 255)
    const [lastOctet, setLastOctet, lastOctetValueHandler] = useLimitedState(0, 0, 255)
    let result: [addresse, addresse, addresse, addresse] = [
        {
            octet: firstOctet,
            setOctet: setFirstOctet,
            handleValueEvent: firstOctetValueHandler
        },
        {
            octet: secondOctet,
            setOctet: setSecondOctet,
            handleValueEvent: secondOctetValueHandler
        },
        {
            octet: thirdOctet,
            setOctet: setThirdOctet,
            handleValueEvent: thirdOctetValueHandler
        },
        {
            octet: lastOctet,
            setOctet: setLastOctet,
            handleValueEvent: lastOctetValueHandler
        }
    ]
    return result
}
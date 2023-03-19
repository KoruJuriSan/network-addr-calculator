const useLimitedState = require("./useLimitedState")

function useAddrState() {

    const [firstOctet, setFirstOctet, firstOctetValueHandler] = useLimitedState(0, 0, 255)
    const [secondOctet, setSecondOctet, secondOctetValueHandler] = useLimitedState(0, 0, 255)
    const [thirdOctet, setThirdOctet, thirdOctetValueHandler] = useLimitedState(0, 0, 255)
    const [lastOctet, setLastOctet, lastOctetValueHandler] = useLimitedState(0, 0, 255)


    return [
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
}

module.exports = useAddrState
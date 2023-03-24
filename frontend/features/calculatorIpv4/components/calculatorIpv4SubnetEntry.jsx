const PropTypes = require("prop-types")
const React = require("react")
const checkIntIsCorrectOctet = require("../../../libs/CheckIntIsCorrectOctet")

function CalculatorIpv4SubnetEntry({value, setValue, isBinary, upperValue = 255, resetsValue=[]}) {
    const base = React.useMemo(() => {
        return isBinary ? 2 : 10
    }, [isBinary])
    
    const handleChange = React.useCallback((e) => {
        let newValue = parseInt(e.target.value, base)
        if (upperValue == 255) {setValue(newValue)}
        resetsValue.forEach(element => {
            element(0)
        })
    })

    const handleLeave = React.useCallback((e) => {
        setValue(checkIntIsCorrectOctet(parseInt(e.target.value)))
    }, [setValue])
    
    return (
        <input type="text" className={`${isBinary ? " w-20 text-sm" : "w-14 text-xl"} text-center rounded-md bg-black bg-opacity-0 border-2`} value={value.toString(base)} onBlur={handleLeave} onChange={handleChange}/>
    )
}

CalculatorIpv4SubnetEntry.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
    isBinary: PropTypes.bool,
    upperValue: PropTypes.number,
    resetsValue: PropTypes.array
}

module.exports = CalculatorIpv4SubnetEntry
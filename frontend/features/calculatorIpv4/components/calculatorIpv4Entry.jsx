const PropTypes = require("prop-types")
const { useMemo } = require("react")
const React = require("react")

function CalculatorIpv4Entry({value, setValue, leaveTestValue, isBinary}) {

    const base = useMemo(() => {
        return isBinary ? 2 : 10
    }, [isBinary])
    
    const handleChange = React.useCallback((e) => {
        let newValue = parseInt(e.target.value, base)
        setValue(newValue)
    })

    const handleLeave = React.useCallback((e) => {
        if (leaveTestValue) setValue(leaveTestValue(parseInt(e.target.value)))
    }, [setValue])
    
    return (
        <input type="text" className={`${isBinary ? " w-20 text-sm" : "w-14 text-xl"} text-center rounded-md text-white bg-white bg-opacity-0 border-2`} value={value.toString(base)} onBlur={handleLeave} onChange={handleChange}/>
    )
}

CalculatorIpv4Entry.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
    leaveTestValue: PropTypes.func,
    changeTestValue: PropTypes.func,
    isBinary: PropTypes.bool
}

module.exports = CalculatorIpv4Entry
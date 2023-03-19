const PropTypes = require("prop-types")
const CalculatorIpv4Entry = require("./calculatorIpv4Entry")
const React = require("react")
const CheckIntIsCorrectOctet = require("../../../libs/CheckIntIsCorrectOctet")

function CalculatorIpv4SubnetEntry({value, setValue, isBinary}) {
    return (
        <CalculatorIpv4Entry value={value} setValue={setValue} leaveTestValue={CheckIntIsCorrectOctet} isBinary={isBinary} />
    )
}

CalculatorIpv4SubnetEntry.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
    isBinary: PropTypes.bool
}

module.exports = CalculatorIpv4SubnetEntry
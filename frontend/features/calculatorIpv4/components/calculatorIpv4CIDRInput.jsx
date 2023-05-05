const PropTypes = require("prop-types")
const React = require("react")
const parseCIDRToSubnet = require("../../../libs/parseCIDRToSubnet")
const parseSubnetToCIDR = require("../../../libs/parseSubnetToCIDR")
const clampInt = require("../../../libs/clampInt")

function CalculatorIpv4CIDRInput({submask}) {
    const value = React.useMemo(() => {
        return parseSubnetToCIDR(submask.map((element) => element.octet))
    })

    const handleChange = React.useCallback((e) => {
        let value = parseInt(e.target.value)
        value = clampInt(value, 0, 30)
        const newSubmask = parseCIDRToSubnet(value)
        submask.forEach((element, key) => {
            element.setOctet(newSubmask[key])
        })
    })
    
    return (
        <input type="text" className={`w-16 text-xl text-center rounded-md bg-transparent border-2`} value={value.toString()} onChange={handleChange}/>
    )
}

CalculatorIpv4CIDRInput.propTypes = {
    submask: PropTypes.array
}

module.exports = CalculatorIpv4CIDRInput
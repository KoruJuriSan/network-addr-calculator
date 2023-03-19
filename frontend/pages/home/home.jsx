const React = require("react")
const CalculatorIpv4 = require("../../features/calculatorIpv4/components/calculatorIpv4")

module.exports = function Home() {
    return (
        <div className=" flex justify-center mt-20">
            <CalculatorIpv4 />
        </div>
    )
}
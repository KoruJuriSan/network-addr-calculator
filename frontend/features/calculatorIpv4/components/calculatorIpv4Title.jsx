const PropTypes = require("prop-types")
const React = require("react")

function CalculatorIpv4Title({value, children, commingSoon}) {
    return (
        <h1 className={`${commingSoon ? " opacity-50" : ""}
        pb-1
        text-2xl
        font-bold
        relative
        w-fit
        text-auto
        before:w-11/12
        before:h-0.5
        before:block
        before:absolute
        before:bottom-0
        before:right-0
        after:w-11/12
        after:h-0.5
        after:block
        after:absolute
        after:bottom-1
        after:bg-current
        before:bg-current
        `}>
            {(value || children) || "Lorem Ipsum."}
        </h1>
    )
}

CalculatorIpv4Title.propTypes = {
    value: PropTypes.string,
    children: PropTypes.string,
    commingSoon: PropTypes.bool
}

module.exports = CalculatorIpv4Title
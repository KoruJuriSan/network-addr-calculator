const React = require("react")

function useLimitedState(initialValue,minValue = 0,maxValue = 999) {
    const [value, setValue] = React.useState(initialValue)

    function setLimitedValue(newValue) {
        if (newValue >= minValue && newValue <= maxValue) {
            setValue(newValue)
        } else {
            if (newValue > maxValue) setValue(maxValue)
            if (newValue < minValue || isNaN(newValue)) setValue(minValue)
        }
    }

    function valueEventHandler(event) {
        console.log(parseInt(event.target.value))
        setLimitedValue(parseInt(event.target.value))
    }

    return [value, setLimitedValue, valueEventHandler]
}

module.exports = useLimitedState
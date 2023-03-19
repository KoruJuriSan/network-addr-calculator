const React = require("react")

module.exports = function useToggle(value) {
    if (typeof value != "boolean") throw TypeError("The value should be an boolean.")
    const [state, setState] = React.useState(value || false)
    const toggleState = function() {
        setState(!state)
    }
    return [state, toggleState]
}
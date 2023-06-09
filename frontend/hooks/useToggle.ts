import React = require("react")

export default function useToggle(value: boolean) {
    if (typeof value != "boolean") throw TypeError("The value should be an boolean.")
    const [state, setState] = React.useState(value || false)
    function toggleState(): void {
        setState(!state)
    }
    let result: [boolean, () => void]
    result = [state, toggleState]
    return result
}
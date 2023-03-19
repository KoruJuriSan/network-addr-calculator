const { useContext } = require("react")
const React = require("react")
const expandedContext = require("../contexts/expandedContext")

module.exports = function Hamburger() {

    const [isExpanded, toggleExpanded] = useContext(expandedContext)

    return (
        <button onClick={toggleExpanded} aria-controls="pirmary-navigation" aria-expanded={isExpanded} className={`
        w-8
        aspect-square
        relative
        z-50
        hidden
        mq-35rem:block
        `}>
            <span className="sr-only">Menu</span>
            <svg className="hamburger-menu" viewBox="0 0 100 100">
                <rect className="fill-white hamburger-line hamburger-top" width="100" height="18" y="41" rx="9"></rect>
                <rect className="fill-white hamburger-line hamburger-middle" width="100" height="18" y="41" rx="9"></rect>
                <rect className="fill-white hamburger-line hamburger-bottom" width="100" height="18" y="41" rx="9"></rect>
            </svg>
        </button>
    )
}
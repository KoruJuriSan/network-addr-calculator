const React = require("react")
const Logo = require("./components/logo")
const Nav = require("./components/nav")
const Hamburger = require("./components/hamburger")
const expandedContext = require("./contexts/expandedContext")
const useToggle = require("../../hooks/useToggle")

module.exports = function Headder() {

    const [isExpanded, toggleExpanded] = useToggle(false)

    return (
        <expandedContext.Provider value={[isExpanded, toggleExpanded]}>
            <header className=" pt-9 flex justify-between left-0 right-0 mq-35rem:mx-10 mx-16 m-auto fixed z-10">
                <Logo></Logo>
                <Hamburger></Hamburger>
                <Nav></Nav>
            </header>
        </expandedContext.Provider>
    )
}
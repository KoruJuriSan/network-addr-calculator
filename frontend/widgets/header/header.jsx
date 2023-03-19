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
            <header className=" pt-9 flex justify-between w-11/12 mq-35rem:w-9/12 m-auto max-w-screen-2xl">
                <Logo></Logo>
                <Hamburger></Hamburger>
                <Nav></Nav>
            </header>
        </expandedContext.Provider>
    )
}
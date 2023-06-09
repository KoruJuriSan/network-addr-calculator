import React from "react"
import Logo from "./components/logo"
import Navigation from "./components/navigation"
import HamburgerMenu from "./components/hamburgerMenu"
import isMenuExpandedContext from "./contexts/expandedContext"
import useToggle from "../../hooks/useToggle"

export default function Headder() {

    const [isExpanded, toggleExpanded] = useToggle(false)

    return (
        <isMenuExpandedContext.Provider value={[isExpanded, toggleExpanded]}>

            <header className="pt-9 flex justify-between left-0 right-0 mq-35rem:mx-10 mx-16 m-auto fixed z-10">
                <Logo />
                <HamburgerMenu />
                <Navigation />
            </header>

        </isMenuExpandedContext.Provider>
    )
}
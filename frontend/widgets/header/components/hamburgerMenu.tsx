import React from "react"
import isMenuExpandedContext from "../contexts/expandedContext"
import HamburgerSVG from "./hamburgerSVG"

const styles: string = "w-8 aspect-square relative z-50 hidden mq-35rem:block"

export default function HamburgerMenu() {
    const [isExpanded, toggleExpanded]: [boolean, () => void] = React.useContext(isMenuExpandedContext)

    return (
        <button onClick={toggleExpanded} aria-controls="pirmary-navigation" aria-expanded={isExpanded} className={styles}>
            <span className="sr-only">Menu</span>
            <HamburgerSVG />
        </button>
    )
}
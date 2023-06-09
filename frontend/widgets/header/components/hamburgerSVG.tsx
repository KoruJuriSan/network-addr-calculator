import React from "react"

export default function HamburgerSVG() {
    return <svg className="hamburger-menu" viewBox="0 0 100 100">
        <rect className="fill-current hamburger-line hamburger-top" width="100" height="18" y="41" rx="9"></rect>
        <rect className="fill-current hamburger-line hamburger-middle" width="100" height="18" y="41" rx="9"></rect>
        <rect className="fill-current hamburger-line hamburger-bottom" width="100" height="18" y="41" rx="9"></rect>
    </svg>
}
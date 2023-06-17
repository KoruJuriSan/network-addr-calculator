import React from "react"
import { NavLink } from "react-router-dom"

const titleStyles = "text-2xl bold text-white"
const versionStyles = "text-sm pl-3"

export default function Logo() {
    return (
        <NavLink to={"/network-addr-calculator"} reloadDocument>
            <div className={titleStyles}>
                <span>{`sub.MASK >`}</span>
                <span className={versionStyles}>v1.4</span>
            </div>
        </NavLink>
    )
}
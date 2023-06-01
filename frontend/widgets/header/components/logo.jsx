const React = require("react")
const { NavLink } = require("react-router-dom")

module.exports = function Logo() {
    return (
        <NavLink to={"/"} reloadDocument>
            <span className=" text-2xl bold text-white">{"sub.MASK >"}<span className=" text-sm pl-3">v1.3.3</span></span>
        </NavLink>
    )
}
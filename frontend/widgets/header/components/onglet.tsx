import React from "react"
import { NavLink } from "react-router-dom"

interface Props {
    id: string | number,
    ongletInfo: {name: string, link: string}
}

export default function Onglet({id, ongletInfo}: Props) {
    return <NavLink className={({ isActive }) => { return "rounded-full block" + (isActive ? " underline" : "")}} to={ongletInfo.link}>
    <div className=" py-1 px-4 flex gap-1">
        <span className=" font-bold">{("00" + id).slice(-2)}</span>
        <span>{ongletInfo.name}</span>
    </div>
</NavLink>}
/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"

const styles = `px-6 py-1 w-fit max-w-md text-lg font-bold hover:cursor-pointer relative after:absolute
 after:h-full after:w-full after:left-0 after:top-0 after:border-2 after:duration-150 hover:after:-translate-x-1
 hover:after:-translate-y-1 before:absolute before:w-full before:h-full before:left-0 before:top-0 before:border-2
 hover:before:translate-x-1 hover:before:translate-y-1 before:duration-150`

 interface Props {
    value?: string | undefined,
    children?: string,
    onClick: () => void
 }

function BtnFN({value=undefined, children="Click me !", onClick=() => {}}: Props) {
    return (
        <button type="button" className={styles} onClick={onClick}> {value || children}</button>
    )
}

function BtnLink({value=undefined, children="Click me !", url="/"}) {
    return (
        <Link className={styles} to={url}>{value || children}</Link>
    )
}

export default {
    BtnFN,
    BtnLink
}
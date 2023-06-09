import React from "react"

interface Props {
    value?: string,
    children?: string,
    commingSoon?: boolean
}

const styles: string = `pb-1 text-2xl font-bold relative w-fit text-auto before:w-11/12
 before:h-0.5 before:block before:absolute before:bottom-0 before:right-0 after:w-11/12
 after:h-0.5 after:block after:absolute after:bottom-1 after:bg-current before:bg-current`

 const commingSoonStyles: string = "opacity-50"

export default function CalculatorIpv4Title({value, children, commingSoon}: Props) {
    return (
        <h1 className={`${commingSoon ? commingSoonStyles : ""} ${styles}`}>
            {(value || children) || "Lorem Ipsum."}
        </h1>
    )
}
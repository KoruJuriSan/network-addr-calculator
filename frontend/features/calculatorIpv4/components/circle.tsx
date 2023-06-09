import React from "react"

interface Props {
    diameter?: number
}

export default function Circle({diameter = 5}: Props) {
    const ray = React.useMemo(() => diameter / 2, [diameter])
    return <svg height={diameter} width={diameter} className=" mb-1">
        <ellipse cx={ray} cy={ray} rx={ray} ry={ray} className=" fill-current" />
    </svg>
}
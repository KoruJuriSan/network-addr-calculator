import React from "react"
import creators from "../assets/creators.json"

interface creator {
    name: string,
    github: string,
    year: string
}

interface Props {
    className: string,
    sufix: string
}

export default function Creators({className, sufix}: Props) {
    const creatorsComponents = React.useMemo(() => creators.map((creator: creator) => <li key={creator.name + sufix}>
        <a href={creator.github} className={className}>{creator.name}</a>
        </li>
    ), [])

    return <>{creatorsComponents}</>
}
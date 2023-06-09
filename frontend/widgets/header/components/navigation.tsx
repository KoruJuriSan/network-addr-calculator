import React from "react"
import expandedContext from "../contexts/expandedContext"
import copyright from "../../../assets/copyright.json"
import Creators from "../../../components/creators"
import Onglets from "./onglets"

const navStyles = `mq-35rem:duration-500 mq-35rem:overflow-y-auto mq-35rem:fixed mq-35rem:top-0 mq-35rem:bottom-0
 mq-35rem:right-0 mq-35rem:left-20 mq-35rem:px-10 mq-35rem:pt-24 mq-35rem:bg-black mq-35rem:border-l-2 z-40 flex
 flex-col justify-between`

const navExpandedStyle = "mq-35rem:translate-x-full"

export default function Navigation() {
    const [isExpanded]: [number] = React.useContext(expandedContext)
    return (
        <nav className={`${navStyles} ${isExpanded ? "" : navExpandedStyle}`}>
            <ul data-visible={isExpanded} id="pirmary-navigation" className=" flex mq-35rem:flex-col">
                <Onglets />
            </ul>
            <div className=" mq-35rem:gap-10 mq-35rem:flex mq-35rem:flex-col hidden">
                <ul>
                    <h3>Creators :</h3>
                    <Creators className="text-xs underline pl-4" sufix="-github-li" />
                </ul>
                <span className=" pb-10 text-sm">{copyright}</span>
            </div>
        </nav>
    )
}
import React from "react"
import navigationInfo from "../../../assets/navigation.json"
import Onglet from "./onglet"

export default function Onglets() {
    const onglets = React.useMemo(() => navigationInfo.map((ongletInfo, key) => <li key={ongletInfo.name.toLowerCase() + "-onglet-li"}>
        <Onglet id={key} ongletInfo={ongletInfo} /></li>
    ), [])

    return <>{onglets}</>
}
const React = require("react")
const { NavLink } = require("react-router-dom")
const expandedContext = require("../contexts/expandedContext")
const navigationInfo = require("../../../assets/navigation.json")
const creators = require("../../../assets/creators.json")
const copyright = require("../../../assets/copyright.json")

module.exports = function Navigation() {

    const [isExpanded] = React.useContext(expandedContext)

    const onglets = React.useMemo(() => {
        return navigationInfo.map((onglet, key) => {
            return (
                <li key={onglet.name.toLowerCase() + "-page-li"}>
                    <NavLink className={({ isActive }) => { return "rounded-full block" + (isActive ? " underline" : "")}} to={onglet.link}>
                        <div className=" py-1 px-4 flex gap-1">
                            <span className=" font-bold">{("00" + key).slice(-2)}</span>
                            <span>{onglet.name}</span>
                        </div>
                    </NavLink>
                </li>
            )
        })
    })

    const creatorsComponents = React.useMemo(() => {
        return creators.map((creator) => {
            return (
                <li key={creator.name + "-github-li"}>
                    <a href={creator.github} className=" text-xs underline pl-4">{creator.name}</a>
                </li>
            )
        })
    })

    return (
        <nav className={`
        mq-35rem:duration-500
        mq-35rem:overflow-y-auto
        mq-35rem:fixed
        mq-35rem:top-0
        mq-35rem:bottom-0
        mq-35rem:right-0
        mq-35rem:left-20
        mq-35rem:px-10
        mq-35rem:pt-24 
        mq-35rem:bg-black
        mq-35rem:border-l-2
        z-40
        flex flex-col 
        justify-between
        ${isExpanded ? "" : "mq-35rem:translate-x-full"}`}>
            <ul data-visible={isExpanded} id="pirmary-navigation" className=" flex mq-35rem:flex-col">
                {onglets}
            </ul>
            <div className=" mq-35rem:gap-10 mq-35rem:flex mq-35rem:flex-col hidden">
                <ul className="">
                    <h3>Creators :</h3>
                    {creatorsComponents}
                </ul>
                <span className=" pb-10 text-sm">{copyright}</span>
            </div>
        </nav>
    )
}
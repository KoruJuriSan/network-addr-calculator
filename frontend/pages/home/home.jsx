const React = require("react")
const CalculatorIpv4 = require("../../features/calculatorIpv4/components/calculatorIpv4")
const Button = require("../../components/button")
const creators = require("../../assets/creators.json")

module.exports = function Home() {

    const creatorsComponents = React.useMemo(() => {
        return creators.map((creator) => {
            return (
                <li key={creator.name + "-github-li"} className=" list-none">
                    <a href={creator.github} className=" underline pl-4">{creator.name}</a>
                </li>
            )
        })
    })

    return (
        <div className=" flex flex-wrap gap-32 justify-center py-32 bg-black">
            <article className="Call to action">
                <h1 className=" text-4xl font-bold mb-7">sub.MASK &gt; <span className=" text-2xl">1.3.2</span></h1>
                <div className=" mb-7">
                    <p className="
                    text-2xl
                    font-bold
                    "> 
                        <span className="
                        text-writing-first
                        "> Le calculateur d&apos;adresse ip et de</span> <br />
                        <span className="
                        text-writing-second
                        ">masque de sous réseaux.</span>
                    </p>
                </div>
                <div className=" flex gap-8">
                    <h3 className=" text-lg">Créateurs</h3>
                    <ul className=" flex flex-col">
                        {creatorsComponents}
                    </ul>
                </div>
            </article>
            <CalculatorIpv4 />
        </div>
    )
}
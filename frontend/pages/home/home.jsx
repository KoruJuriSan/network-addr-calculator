const React = require("react")
const CalculatorIpv4 = require("../../features/calculatorIpv4/components/calculatorIpv4")
const Button = require("../../components/button")
const colorContext = require("../../context/colorContext")

module.exports = function Home() {

    const primaryColor = React.useContext(colorContext)

    return (
        <div className=" flex gap-32 justify-center mt-32">
            <article className="Call to action">
                <h1 className=" text-4xl font-bold mb-7">sub.MASK &gt;</h1>
                <div className=" mb-7">
                    <p className="
                    text-2xl
                    font-bold
                    "> 
                        <span className={`
                        text-writing-first
                        bg-${primaryColor}
                        `}> Le calculateur d&apos;adresse ip et de</span> <br />
                        <span className={`
                        text-writing-second
                        bg-${primaryColor}
                        `}>masque de sous réseaux.</span>
                    </p>
                </div>
                <div className=" flex gap-8">
                    <Button.BtnLink url="/exercices">Exercices</Button.BtnLink>
                    <Button.BtnLink url="/history">Historique</Button.BtnLink>
                </div>
            </article>
            <CalculatorIpv4 />
        </div>
    )
}
import React from "react"
import CalculatorIpv4 from "../../features/calculatorIpv4/components/calculatorIpv4"
import Creators from "../../components/creators"

interface creator {
    name: string,
    github: string,
    year: string
}

export default function Home(): JSX.Element {
    return (
        <div className=" flex flex-wrap gap-32 mq-35rem:gap-20 justify-center py-32 bg-black">
            <article className="Call to action">
                <h1 className=" text-4xl font-bold mb-7">sub.MASK &gt;</h1>
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
                        <Creators className="underline pl-4" sufix="-github-li" />
                    </ul>
                </div>
            </article>
            <CalculatorIpv4 />
        </div>
    )
}
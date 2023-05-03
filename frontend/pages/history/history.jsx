const React = require("react")

module.exports = function History() {
    return (
        <div className=" flex w-full items-center flex-col">
            <h1 className=" text-3xl text-center pt-24 font-bold">Historique du projet</h1>
            <p className=" max-w-xl pt-5">
                Notre équipe est composé de Joulian, Brendan et Romain. Ce projet à été réalisé dans le cadre de notre projet de fin
                d'étude et le concepte de celui-ci nous à été proposé par notre proffesseur de réseau <italic>Patrick Hainaut</italic>
            </p>
        </div>
    )
}
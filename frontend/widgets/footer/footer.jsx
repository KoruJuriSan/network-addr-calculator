const React = require("react")
const copyright = require("../../assets/copyright.json")

function Footer() {
    return (
        <footer class=" absolute bottom-0 text-green text-center w-full mq-35rem:hidden">{copyright}</footer>
    )
}

module.exports = Footer
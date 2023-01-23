const React = require("react")
const generateRandomIpv4List = require("../libs/generateRandomIpv4List")
const getRandomInt = require("../libs/getRandomInt")

function useRandomIpv4() {
    const [Ip, setIp] = React.useState([generateRandomIpv4List(), getRandomInt(29)+1])
    function RegenerateRandomIpv4() {
        setIp([generateRandomIpv4List(), getRandomInt(29)+1])
    }
    return [Ip, RegenerateRandomIpv4]
}

module.exports = useRandomIpv4
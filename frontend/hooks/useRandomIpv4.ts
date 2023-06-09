import React from "react"
import generateRandomIpv4List from "../libs/generateRandomIpv4List"
import getRandomInt from "../libs/getRandomInt" 

function useRandomIpv4() {
    const [Ip, setIp] = React.useState([generateRandomIpv4List(), getRandomInt(29)+1])
    function RegenerateRandomIpv4() {
        setIp([generateRandomIpv4List(), getRandomInt(29)+1])
    }
    return [Ip, RegenerateRandomIpv4]
}

module.exports = useRandomIpv4
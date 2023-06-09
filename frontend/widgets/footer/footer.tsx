import React from "react"
import copyright from "../../assets/copyright.json"

const styles: string = "absolute bottom-0 text-green text-center w-full mq-35rem:hidden"

export default function Footer() {
    return (
        <footer className={styles}>{copyright}</footer>
    )
}
import React from "react"
import useAddrState from "../../../hooks/useAddrState"
import FormIpv4 from "./formIpv4"
import useToggle from "../../../hooks/useToggle"
import AnswerIpv4Widget from "./answerIpv4Widget"
import Button from "../../../components/button"

interface addresse {
    octet: number,
    setOctet: (value: number) => void,
    handleValueEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CalculatorIpv4(): JSX.Element {
    const addr: [addresse, addresse, addresse, addresse] = useAddrState()
    const submask: [addresse, addresse, addresse, addresse] = useAddrState()
    const [isWidgetOpen, toggleisWidgetOpen] = useToggle(false)
    const btnText = React.useMemo(() => isWidgetOpen ? "Reset" : "Calculer !", [])
    return (
        <article className="flex flex-col gap-12 ">
            {isWidgetOpen ? 
                <AnswerIpv4Widget addr={addr} submask={submask} /> :
                <FormIpv4 addr={addr} submask={submask} />
            }
            <Button.BtnFN onClick={toggleisWidgetOpen}>{btnText}</Button.BtnFN>
        </article>
    )
}
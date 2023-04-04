const React = require("react")
const useAddrState = require("../../../hooks/useAddrState")
const CalculatorIpv4CallToAction = require("./calculatorIpv4CallToAction")
const FormIpv4 = require("./formIpv4")
const useToggle = require("../../../hooks/useToggle")
const AnswerIpv4Widget = require("./answerIpv4Widget")
const Button = require("../../../components/button")

module.exports = function CalculatorIpv4() {
    const Addr = useAddrState()
    const SubMask = useAddrState()

    const [isWidgetOpen, toggleisWidgetOpen] = useToggle(false)

    const btnText = React.useMemo(() => {
        return isWidgetOpen ? "Reset" : "Calculé !" 
    })
    return (
        <article className="flex flex-col gap-12 ">
            {isWidgetOpen ? 
                <AnswerIpv4Widget Addr={Addr} SubMask={SubMask} /> :
                <FormIpv4 Addr={Addr} SubMask={SubMask} />
            }
            <Button.BtnFN fn={toggleisWidgetOpen}>{btnText}</Button.BtnFN>
        </article>
    )
}
const React = require("react")
const CalculatorIpv4Title = require("./calculatorIpv4Title")
const CalculatorIpv4Entry = require("./calculatorIpv4Entry")
const CalculatorIpv4SubnetEntry = require("./calculatorIpv4SubnetEntry")
const useAddrState = require("../../../hooks/useAddrState")
const CalculatorIpv4CallToAction = require("./calculatorIpv4CallToAction")
const colorContext = require("../../../context/colorContext")

module.exports = function CalculatorIpv4() {
    const Addr = useAddrState()
    const SubMask = useAddrState()
    const circleSize = "5"

    const [primaryColor] = React.useContext(colorContext)

    return (
        <article className="flex flex-col gap-12 ">
            <div className="flex flex-col gap-6">
                <div>
                    <CalculatorIpv4Title value="Adresse IPv4" />
                    <div className=" flex flex-col items-center">
                        <div className=" flex gap-3.5 text-white mt-4 items-end">
                            <CalculatorIpv4Entry value={Addr[0].octet} setValue={Addr[0].setOctet} />
                            <svg height={circleSize} width={circleSize} className=" mb-1">
                                <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className={`fill-${primaryColor}`} />
                            </svg>
                            <CalculatorIpv4Entry value={Addr[1].octet} setValue={Addr[1].setOctet} />
                            <svg height={circleSize} width={circleSize} className=" mb-1">
                                <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className={`fill-${primaryColor}`} />
                            </svg>
                            <CalculatorIpv4Entry value={Addr[2].octet} setValue={Addr[2].setOctet} />
                            <svg height={circleSize} width={circleSize} className=" mb-1">
                                <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className={`fill-${primaryColor}`} />
                            </svg>
                            <CalculatorIpv4Entry value={Addr[3].octet} setValue={Addr[3].setOctet} />
                        </div>
                        <div className=" flex gap-2 text-white mt-4 items-end">
                            <CalculatorIpv4Entry value={Addr[0].octet} setValue={Addr[0].setOctet} isBinary={true} />
                            <CalculatorIpv4Entry value={Addr[1].octet} setValue={Addr[1].setOctet} isBinary={true} />
                            <CalculatorIpv4Entry value={Addr[2].octet} setValue={Addr[2].setOctet} isBinary={true} />
                            <CalculatorIpv4Entry value={Addr[3].octet} setValue={Addr[3].setOctet} isBinary={true} />
                        </div>
                    </div>
                </div>
                <div>
                    <CalculatorIpv4Title value="Masque de sous réseau" />
                    <div className=" flex flex-col items-center">
                        <div className=" flex gap-3.5 text-white mt-4 items-end">
                            <CalculatorIpv4SubnetEntry value={SubMask[0].octet} setValue={SubMask[0].setOctet} resetsValue={[SubMask[1].setOctet, SubMask[2].setOctet, SubMask[3].setOctet]} />
                            <svg height={circleSize} width={circleSize} className=" mb-1">
                                <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className={`fill-${primaryColor}`} />
                            </svg>
                            <CalculatorIpv4SubnetEntry value={SubMask[1].octet} setValue={SubMask[1].setOctet} upperValue={SubMask[0].octet} resetsValue={[SubMask[2].setOctet, SubMask[3].setOctet]} />
                            <svg height={circleSize} width={circleSize} className=" mb-1">
                                <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className={`fill-${primaryColor}`} />
                            </svg>
                            <CalculatorIpv4SubnetEntry value={SubMask[2].octet} setValue={SubMask[2].setOctet} upperValue={SubMask[1].octet} resetsValue={[SubMask[3].setOctet]} />
                            <svg height={circleSize} width={circleSize} className=" mb-1">
                                <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className={`fill-${primaryColor}`} />
                            </svg>
                            <CalculatorIpv4SubnetEntry value={SubMask[3].octet} setValue={SubMask[3].setOctet} upperValue={SubMask[2].octet} />
                        </div>
                        <div className=" flex gap-2 text-white mt-4 items-end">
                            <CalculatorIpv4SubnetEntry value={SubMask[0].octet} setValue={SubMask[0].setOctet} isBinary={true} />
                            <CalculatorIpv4SubnetEntry value={SubMask[1].octet} setValue={SubMask[1].setOctet} isBinary={true} />
                            <CalculatorIpv4SubnetEntry value={SubMask[2].octet} setValue={SubMask[2].setOctet} isBinary={true} />
                            <CalculatorIpv4SubnetEntry value={SubMask[3].octet} setValue={SubMask[3].setOctet} isBinary={true} />
                        </div>
                    </div>
                </div>
            </div>
            <CalculatorIpv4CallToAction value="Générer la réponse" Addr={Addr} SubMask={SubMask} />
        </article>
    )
}
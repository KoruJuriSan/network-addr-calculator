const React = require("react")
const PropTypes = require("prop-types")
const CalculatorIpv4Title = require("./calculatorIpv4Title")
const CalculatorIpv4Entry = require("./calculatorIpv4Entry")
const CalculatorIpv4SubnetEntry = require("./calculatorIpv4SubnetEntry")
const CalculatorIpv4CIDRInput = require("./calculatorIpv4CIDRInput")

const circleSize = "5"

function FormIpv4({Addr, SubMask}) {
    return (
        <div className="flex flex-col gap-6 w-96 h-72">
            <div>
                <CalculatorIpv4Title value="Adresse IPv4" />
                <div className=" flex flex-col items-center w-fit">
                    <div className=" flex gap-2.5 mt-4 items-end">
                        <CalculatorIpv4Entry value={Addr[0].octet} setValue={Addr[0].setOctet} />
                        <svg height={circleSize} width={circleSize} className=" mb-1">
                            <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className=" fill-current" />
                        </svg>
                        <CalculatorIpv4Entry value={Addr[1].octet} setValue={Addr[1].setOctet} />
                        <svg height={circleSize} width={circleSize} className=" mb-1">
                            <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className=" fill-current" />
                        </svg>
                        <CalculatorIpv4Entry value={Addr[2].octet} setValue={Addr[2].setOctet} />
                        <svg height={circleSize} width={circleSize} className=" mb-1">
                            <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className=" fill-current" />
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
                <div className=" flex flex-col items-center w-fit">
                    <div className=" flex gap-2.5 text-white mt-4 items-end">
                        <CalculatorIpv4SubnetEntry value={SubMask[0].octet} setValue={SubMask[0].setOctet} resetsValue={[SubMask[1].setOctet, SubMask[2].setOctet, SubMask[3].setOctet]} />
                        <svg height={circleSize} width={circleSize} className=" mb-1">
                            <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className=" fill-current" />
                        </svg>
                        <CalculatorIpv4SubnetEntry value={SubMask[1].octet} setValue={SubMask[1].setOctet} upperValue={SubMask[0].octet} resetsValue={[SubMask[2].setOctet, SubMask[3].setOctet]} />
                        <svg height={circleSize} width={circleSize} className=" mb-1">
                            <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className=" fill-current" />
                        </svg>
                        <CalculatorIpv4SubnetEntry value={SubMask[2].octet} setValue={SubMask[2].setOctet} upperValue={SubMask[1].octet} resetsValue={[SubMask[3].setOctet]} />
                        <svg height={circleSize} width={circleSize} className=" mb-1">
                            <ellipse cx={circleSize/2} cy={circleSize/2} rx={circleSize/2} ry={circleSize/2} className=" fill-current" />
                        </svg>
                        <CalculatorIpv4SubnetEntry value={SubMask[3].octet} setValue={SubMask[3].setOctet} upperValue={SubMask[2].octet} />
                    </div>
                    <div className=" flex gap-2 text-white mt-4 items-end">
                        <CalculatorIpv4SubnetEntry value={SubMask[0].octet} setValue={SubMask[0].setOctet} isBinary={true} />
                        <CalculatorIpv4SubnetEntry value={SubMask[1].octet} setValue={SubMask[1].setOctet} isBinary={true} />
                        <CalculatorIpv4SubnetEntry value={SubMask[2].octet} setValue={SubMask[2].setOctet} isBinary={true} />
                        <CalculatorIpv4SubnetEntry value={SubMask[3].octet} setValue={SubMask[3].setOctet} isBinary={true} />
                    </div>
                    <div className=" flex justify-end w-full mt-4">
                        <CalculatorIpv4CIDRInput submask={SubMask} />
                    </div>
                </div>
            </div>
        </div>
    )
}

FormIpv4.propTypes = {
    Addr: PropTypes.array,
    SubMask: PropTypes.array
}

module.exports = FormIpv4
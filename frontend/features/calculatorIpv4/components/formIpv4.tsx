import React from "react"
import CalculatorIpv4Title from "./calculatorIpv4Title"
import CalculatorIpv4Entry from "./calculatorIpv4Entry"
import CalculatorIpv4SubnetEntry from "./calculatorIpv4SubnetEntry"
import CalculatorIpv4CIDRInput from "./calculatorIpv4CIDRInput"
import Circle from "./circle"

interface addresse {
    octet: number,
    setOctet: (value: number) => void,
    handleValueEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface Props {
    addr: [addresse, addresse, addresse, addresse],
    submask: [addresse, addresse, addresse, addresse]
}

const circleDimeter: number = 5

export default function FormIpv4({addr, submask}: Props) {
    return (
        <div className="flex flex-col gap-6 w-96 h-72">
            <div>
                <CalculatorIpv4Title value="Adresse IPv4" />
                <div className=" flex flex-col items-center w-fit">
                    <div className=" flex gap-2.5 mt-4 items-end">
                        <CalculatorIpv4Entry value={addr[0].octet} setValue={addr[0].setOctet} />
                        <Circle diameter={circleDimeter} />
                        <CalculatorIpv4Entry value={addr[1].octet} setValue={addr[1].setOctet} />
                        <Circle diameter={circleDimeter} />
                        <CalculatorIpv4Entry value={addr[2].octet} setValue={addr[2].setOctet} />
                        <Circle diameter={circleDimeter} />
                        <CalculatorIpv4Entry value={addr[3].octet} setValue={addr[3].setOctet} />
                    </div>
                    <div className=" flex gap-2 text-white mt-4 items-end">
                        <CalculatorIpv4Entry value={addr[0].octet} setValue={addr[0].setOctet} isBinary={true} />
                        <CalculatorIpv4Entry value={addr[1].octet} setValue={addr[1].setOctet} isBinary={true} />
                        <CalculatorIpv4Entry value={addr[2].octet} setValue={addr[2].setOctet} isBinary={true} />
                        <CalculatorIpv4Entry value={addr[3].octet} setValue={addr[3].setOctet} isBinary={true} />
                    </div>
                </div>
            </div>
            <div>
                <CalculatorIpv4Title value="Masque de sous réseau" />
                <div className=" flex flex-col items-center w-fit">
                    <div className=" flex gap-2.5 text-white mt-4 items-end">
                        <CalculatorIpv4SubnetEntry value={submask[0].octet} setValue={submask[0].setOctet} resetsValue={[submask[1].setOctet, submask[2].setOctet, submask[3].setOctet]} />
                        <Circle diameter={circleDimeter} />
                        <CalculatorIpv4SubnetEntry value={submask[1].octet} setValue={submask[1].setOctet} upperValue={submask[0].octet} resetsValue={[submask[2].setOctet, submask[3].setOctet]} />
                        <Circle diameter={circleDimeter} />
                        <CalculatorIpv4SubnetEntry value={submask[2].octet} setValue={submask[2].setOctet} upperValue={submask[1].octet} resetsValue={[submask[3].setOctet]} />
                        <Circle diameter={circleDimeter} />
                        <CalculatorIpv4SubnetEntry value={submask[3].octet} setValue={submask[3].setOctet} upperValue={submask[2].octet} />
                    </div>
                    <div className=" flex gap-2 text-white mt-4 items-end">
                        <CalculatorIpv4SubnetEntry value={submask[0].octet} setValue={submask[0].setOctet} resetsValue={[submask[1].setOctet, submask[2].setOctet, submask[3].setOctet]} isBinary={true} />
                        <CalculatorIpv4SubnetEntry value={submask[1].octet} setValue={submask[1].setOctet} upperValue={submask[0].octet} resetsValue={[submask[2].setOctet, submask[3].setOctet]} isBinary={true} />
                        <CalculatorIpv4SubnetEntry value={submask[2].octet} setValue={submask[2].setOctet} upperValue={submask[1].octet} resetsValue={[submask[3].setOctet]} isBinary={true} />
                        <CalculatorIpv4SubnetEntry value={submask[3].octet} setValue={submask[3].setOctet} upperValue={submask[2].octet} isBinary={true} />
                    </div>
                    <div className=" flex justify-end w-full mt-4">
                        <CalculatorIpv4CIDRInput submask={submask} />
                    </div>
                </div>
            </div>
        </div>
    )
}
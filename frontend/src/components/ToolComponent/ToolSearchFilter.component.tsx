import { VStack , HStack } from "../common/Stack";
import Image from "next/image";

const ToolSearchFilterComponent = () => {
    return (
        <>
            <VStack align="center" className=" border-b-2 border-gray-200 w-full h-[68px] px-11">
                <div className="text-black text-[25.17px] font-bold font-['Quicksand']">AI Dilekçe</div>
            </VStack>
            <VStack className=" pt-4 mb-4">
                <VStack align="center" className="w-[788px] h-[94px] bg-white rounded-[10.53px] px-2 shadow-md">
                    <div className="text-zinc-400 text-lg font-bold font-['Quicksand'] leading-relaxed">Ne aramak istersiniz? Kendi dökümanınız üzerinden de arama yapabilirsiniz.</div>
                    <Image src="/img/addImgPlus.svg" alt="Bubble" width={30} height={30} className="ml-[22px] mr-2" />
                    <Image src="/img/search.svg" alt="search" width={40} height={33} />
                </VStack>
                <VStack align="center" className="ml-5 px-5 gap-5 first-line:gap-[50px] w-[788px] h-[94px] bg-white rounded-[10.53px]    shadow-md">
                    <HStack>
                        <VStack>
                            <Image src="/img/checkBox.svg" alt="ckeckbox" width={25} height={25} />
                            <div className="text-black text-base font-semibold font-['Quicksand'] leading-normal ml-5">Mevzuat</div>
                        </VStack>
                        <VStack>
                            <Image src="/img/checkBox.svg" alt="ckeckbox" width={25} height={25} />
                            <div className="text-black text-base font-semibold font-['Quicksand'] leading-normal ml-5">Mevzuat</div>
                        </VStack>
                    </HStack>
                    <HStack>
                        <VStack>
                            <Image src="/img/checkBox.svg" alt="ckeckbox" width={25} height={25} />
                            <div className="text-black text-base font-semibold font-['Quicksand'] leading-normal ml-5">Mevzuat</div>
                        </VStack>
                        <VStack>
                            <Image src="/img/checkBox.svg" alt="ckeckbox" width={25} height={25} />
                            <div className="text-black text-base font-semibold font-['Quicksand'] leading-normal ml-5">Mevzuat</div>
                        </VStack>

                    </HStack>
                </VStack>
            </VStack>
        </>
    )
}
export default ToolSearchFilterComponent;
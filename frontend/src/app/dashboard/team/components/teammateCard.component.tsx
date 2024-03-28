import { HStack, VStack } from "@/components/common/Stack";
import Image from "next/image";

const TeammateCardComponent = () => {
    return (
        <HStack>
            <div className="w-[314.60px] h-[373.74px] bg-black rounded-[30.20px]">
                <HStack align="center" justify="center" className="h-[318px] w-full relative">
                    <VStack className=" relative w-[135px] h-[135px] rounded-full overflow-hidden">
                        <Image alt="hero profile img" src="/img/man.webp" layout="fill" />
                    </VStack>
                    <div className=" mt-3 text-white text-[25.17px] font-bold font-['Quicksand']">Hacer Erdoğan</div>
                    <div className="text-white text-[15.10px] font-bold font-['Quicksand']">herdogan@gmail.com</div>
                </HStack>
                <HStack align="center" justify="center" className="h-[56px] bg-white bg-opacity-25  rounded-bl-[30.20px] rounded-br-[30.20px]">
                    <div className="text-white text-[18.88px] font-bold font-['Quicksand']">Belge izinleri</div>
                </HStack>
            </div>
        </HStack>
    )
}

export default TeammateCardComponent;
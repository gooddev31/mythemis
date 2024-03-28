import { HStack , VStack } from "@/components/common/Stack";
import Image from "next/image";

const TeammateAddCardComponent = () => {
    return (
        <HStack>
            <div className="w-[314.60px] h-[373.74px] bg-black rounded-[30.20px]">
                <HStack align="center" justify="center" className="w-full h-full">
                    <Image width="70" height="70" alt="hero profile img" src="/img/profileAddPeople.svg" layout="response" />
                    <div className="mt-3 text-white text-3xl font-bold font-['Quicksand'] leading-10">Belge Paylaş</div>
                </HStack>
            </div>
        </HStack>
    )
}

export default TeammateAddCardComponent;
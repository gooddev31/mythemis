import { Button } from "@/components/common/Button";
import { HStack, VStack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import Image from "next/image";



const ProfileSectionHero = () => {
    return (
        <HStack className="h-[414px] bg-black bg-opacity-90 rounded-[13.73px] relative">
            <Image width="1532" height="247" alt="hero profile img" src="/img/ProfileHeroImg.svg" layout="responsive" />
            <VStack className="h-full w-full pr-[10px]" align="center" justify="between">
                <HStack className="ml-[300px] text-white gap-3" justify="center">
                    <VStack><Text Tag="h1" size="3xl" color="white" text="Test Demo" className="font-medium font-['Poppins']" /></VStack>
                    <div className="opacity-50 text-white text-2xl font-light font-['Poppins']">Avukat</div>
                </HStack>
                <Button variant="clear" className="bg-white rounded-lg px-10 py-4">Düzenle</Button>
            </VStack>
            <VStack className="absolute bottom-[57px] left-[65px] w-[180px] h-[180px] rounded-full overflow-hidden">
                <Image alt="hero profile img" src="/img/man.webp" layout="fill" />

            </VStack>
        </HStack>
    )
}
export default ProfileSectionHero;
import { Input } from "@/components/common/Input";
import { HStack, VStack } from "@/components/common/Stack";
import Image from "next/image";

const ProfileInfoComponent = () => {
    return (

        <VStack className="ml-[92px] mt-[30px] gap-[250px]">
            <HStack className="gap-[8px] w-[521px]">
                <HStack className="w-full">
                    <div className=" mb-5 text-lg font-bold font-['Quicksand'] leading-relaxed">İsim Soyisim</div>
                    <VStack className="bg-neutral-50 w-full" align="center">
                        <Image className="ml-[27px]" src="/img/userAuth.svg" width={16} height={16} alt="" />
                        <Input variant="profile" name="username" type="text" placeholder='demo' />
                    </VStack>
                </HStack>
                <HStack className="w-full">
                    <div className=" mb-5 text-lg font-bold font-['Quicksand'] leading-relaxed">E-Posta</div>
                    <VStack className="bg-neutral-50 w-full" align="center">
                        <Image className="ml-[27px]" src="/img/emailAuth.svg" width={16} height={16} alt="" />
                        <Input variant="profile" name="username" type="text" placeholder='demo' />
                    </VStack>
                </HStack>
                <HStack className="w-full">
                    <div className=" mb-5 text-lg font-bold font-['Quicksand'] leading-relaxed">Şifre</div>
                    <VStack className="bg-neutral-50 w-full" align="center">
                        <Image className="ml-[27px]" src="/img/passwordAuth.svg" width={16} height={16} alt="" />
                        <Input variant="profile" name="username" type="text" placeholder='demo' />
                    </VStack>
                </HStack>
                <HStack className="w-full">
                    <div className=" mb-5 text-lg font-bold font-['Quicksand'] leading-relaxed">Şifre Tekrarı</div>
                    <VStack className="bg-neutral-50 w-full" align="center">
                        <Image className="ml-[27px]" src="/img/passwordAuth.svg" width={16} height={16} alt="" />
                        <Input variant="profile" name="username" type="text" placeholder='demo' />
                    </VStack>
                </HStack>
                <HStack className="w-full">
                    <div className=" mb-5 text-lg font-bold font-['Quicksand'] leading-relaxed">Telefon</div>
                    <VStack className="bg-neutral-50 w-full" align="center">
                        <Image className="ml-[27px]" src="/img/telAuth.svg" width={16} height={16} alt="" />
                        <Input variant="profile" name="username" type="text" placeholder='demo' />
                    </VStack>
                </HStack>

            </HStack>
            <HStack className="gap-[8px] w-[521px]">
                <HStack className="w-full">
                    <div className=" mb-5 text-lg font-bold font-['Quicksand'] leading-relaxed">Ünvan</div>
                    <VStack className="bg-neutral-50 w-full" align="center">
                        <Image className="ml-[27px]" src="/img/userAuth.svg" width={16} height={16} alt="" />
                        <Input variant="profile" name="username" type="text" placeholder='demo' />
                    </VStack>
                </HStack>                <HStack className="w-full">
                    <div className=" mb-5 text-lg font-bold font-['Quicksand'] leading-relaxed">Yaş</div>
                    <VStack className="bg-neutral-50 w-full" align="center">
                        <Image className="ml-[27px]" src="/img/userAuth.svg" width={16} height={16} alt="" />
                        <Input variant="profile" name="username" type="text" placeholder='demo' />
                    </VStack>
                </HStack>                <HStack className="w-full">
                    <div className=" mb-5 text-lg font-bold font-['Quicksand'] leading-relaxed">Abonelik</div>
                    <VStack className="bg-neutral-50 w-full" align="center">
                        <Image className="ml-[27px]" src="/img/userAuth.svg" width={16} height={16} alt="" />
                        <Input variant="profile" name="username" type="text" placeholder='demo' />
                    </VStack>
                </HStack>
            </HStack>

        </VStack>
    )
}
export default ProfileInfoComponent;
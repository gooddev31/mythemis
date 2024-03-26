"use client"
import Image from "next/image";
import FormSection from "@/app/authorization/components/form.component";
import Link from "next/link";
import { HStack, VStack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { ChatAnswer, ChatMessage } from "./rideSideAiChatMessages.component";
const RideSideAiChatComponent = () => {
    return (
        <HStack className="mt-[40px] w-[441px] h-[484px]">
            <VStack align="center" className="bg-black w-full h-[94px] rounded-tl-[19px] rounded-tr-[19px] mr-[10px] ">

                <Image
                    priority
                    src="/img/logoMinBlack.svg"
                    width={64}
                    height={56}
                    alt="Logo"
                />

                <HStack className="ml-[10px] w-full">
                    <VStack><Text Tag="h4" size="md" color="white" text="Mythemis" /></VStack>
                    <VStack align="center" ><span className="w-2.5 h-2.5 bg-green-300 rounded-full border border-white "></span>"<Text Tag="p" size="xs" color="white" text="Sizin için buradayım." /></VStack>
                </HStack>
            </VStack>
            <HStack justify="between" className=" bg-white w-full h-full rounded-br-[19px] rounded-bl-[19px] pt-[18px] px-[21px]" >
                <HStack className="w-full">
                    <ChatAnswer text="Size nasıl yardımcı olabilirim?" />
                    <ChatMessage  text="Eser sözleşmesi imzaladım. Belediyeye iş yapıyorum yüklenici firmayım. Yapılacak işte kullanılan malzeme arasında anlaşmazlık var. Tasfiyeye yüklenci taraf olarak başvurabilir miyim"/>
                    <ChatAnswer text=" Anlaşmazlığın doğası ve sözleşmedeki hükümler çerçevesinde, tasfiye prosedürü yoluyla çözüm arayabilirsiniz. " />
                </HStack>
                <VStack className="w-full h-[50px]   px-[6px]">
                    <VStack justify="between" align="center" className="w-full pl-[25px] border-white-transparent-70 border-t-[1px] ">
                        <Input name="chatInput" variant="chat" type="text" />
                        <Button variant="clear">
                            <Image
                                priority
                                src="/img/sendBtn.svg"
                                width={20}
                                height={20}
                                alt="Logo"
                            />
                        </Button>
                    </VStack>
                </VStack>
            </HStack>




        </HStack >

    )
}
export default RideSideAiChatComponent;

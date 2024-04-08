import { VStack } from "@/components/common/Stack";
import { AnalizSectoinChatMessagecomponent, AnalizSectoinUserMessagecomponent } from "./analizSectoin.Chat.Message.component";
import Image from "next/image";

const AnalizSectionChatComponent = () => {
    return (
        <div className="mt-[23px]  flex flex-col w-[1089px] h-[658px] bg-white rounded-lg">
            <div className=" gap-5 flex flex-col w-full h-full  px-8 py-8 overflow-y-scroll">

                <AnalizSectoinUserMessagecomponent message="Gayrimenkul satış sözleşmesi hazırlamak istiyorum" />
                <AnalizSectoinChatMessagecomponent message="Taşınmaz satış sözleşmesi hazırlama talebinizi anladım. Bu sözleşme ile neyi amaçlıyorsunuz? Örneğin, belirli bir gayrimenkulün satışı, belirli şartlar altında bir transfer veya başka bir amacınız mı var?
Gayrimenkul satışı için bir sözleşme hazırlanacak, anlaşıldı. Bu sözleşme, hangi devlet veya yargı bölgesi altında yürütülecek?" />
            </div>
            <VStack className="py-6 mx-5 border-t border-neutral-200" align="center">
                <input
                    type="text"
                    placeholder="Nasıl bir sözleşmeye ihtiyacınız var?"
                    className="w-full h-6 text-zinc-800 text-xs font-normal font-['Quicksand'] leading-none outline-none"
                />
                <Image src="/img/sendBtn.svg" width={24} height={24} alt="send button" className=" cursor-pointer" />

            </VStack>
        </div>
    );
};

export default AnalizSectionChatComponent;

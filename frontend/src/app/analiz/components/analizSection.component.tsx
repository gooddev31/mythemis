"use client";
import Pdf from "@/app/pdf/page";
import ToolSearchFilterComponent from "@/components/ToolComponent/ToolSearchFilter.component";
import { HStack, VStack } from "@/components/common/Stack";
import Image from "next/image";
import AnalizSectionChatComponent from "./analizSection.Chat.component";

const AnalizSection = () => {
    return (
        <div className="w-full flex-col h-[1070px] pr-[40px] justify-start items-start inline-flex mt-[58px]">
            <ToolSearchFilterComponent />
            <HStack className="flex w-full h-full">
                {/* <Pdf /> */}
                <AnalizSectionChatComponent />
            </HStack>


        </div>
    )
}
export default AnalizSection;
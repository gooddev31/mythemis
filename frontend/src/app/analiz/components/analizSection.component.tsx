"use client";
import Pdf from "@/app/pdf/page";
import ToolSearchFilterComponent from "@/components/ToolComponent/ToolSearchFilter.component";
import { HStack, VStack } from "@/components/common/Stack";
import Image from "next/image";

const AnalizSection = () => {
    return (
        <div className="w-full flex-col h-[1070px] bg-white rounded-[18.96px] justify-start items-start inline-flex mt-[58px]">
            <ToolSearchFilterComponent />
            <HStack className="flex w-full h-full">
                <Pdf />
            </HStack>


        </div>
    )
}
export default AnalizSection;
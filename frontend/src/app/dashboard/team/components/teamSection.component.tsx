import { VStack } from "@/components/common/Stack";
import TeammateCardComponent from "./teammateCard.component";
import TeammateAddCardComponent from "./teammateAddCard.component";

const TeamSectionComponent = () => {
    return (
        <div className="w-full flex-col h-[1070px] bg-white rounded-[18.96px] justify-start items-start inline-flex mt-[58px]">
            <VStack align="center" className="px-[42px] border-b-2 w-full h-[100px] border-gray-200"><div className="text-black text-[25.17px] font-bold font-['Quicksand']">Takım</div></VStack>
            <div className="gap-[50px] py-[60px] px-[40px] flex flex-wrap">
                <TeammateCardComponent />
                <TeammateCardComponent />
                <TeammateCardComponent />
                <TeammateCardComponent />
                <TeammateAddCardComponent/>
            </div>
        </div>
    )
}
export default TeamSectionComponent;
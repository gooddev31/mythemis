import NavBarComponent from "@/components/navbar/navBar.component";

import SideActionBarComponent from "@/components/sideBar/sideActionBar.component";
import TeamSectionComponent from "./components/teamSection.component";
import { VStack } from "@/components/common/Stack";

const Team = () => {

    return (
        <div className="py-[65px] px-[45px] bg-[#F1F4FA] flex gap-[28px] font-quicksand">
            <SideActionBarComponent />
            <div>
                <NavBarComponent />
                <VStack className="flex w-full">
                    <TeamSectionComponent />
                </VStack>
            </div>
        </div>
    )
}
export default Team;
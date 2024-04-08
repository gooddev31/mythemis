"use client";

import SideActionBarComponent from "@/components/sideBar/sideActionBar.component";
import MainSectionComponent from "@/app/dashboard/components/mainSection.component";
import RideSideActionComponent from "@/app/dashboard/components/rideSideAction.component";
import NavBarComponent from "@/components/navbar/navBar.component";
import ProfileSection from "@/app/dashboard/profile/components/profileSection.component";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Dashboard = () => {
    const activeComponent = useSelector((state: RootState) => state.activeComponent.value);

    return (
        <div className="py-[65px] pr-[45px] bg-[#F1F4FA] flex gap-[28px] font-quicksand">
            <SideActionBarComponent />
            <div>
                <NavBarComponent />
                <div className="flex w-full">
                    {activeComponent === "profile" ? <ProfileSection /> : (
                        <div className="flex gap-[28px] w-[1507px]"><MainSectionComponent /></div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
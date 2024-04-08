"use client"

import Image from "next/image";
import ProfileButtonComponent from "@/components/sideBar/profileButton.component";
import ActionSectionComponent from "@/components/sideBar/actionSection.component";
import ActionSectionFavouritesFolderComponent
from "@/components/sideBar/actionSection_favourites_folder.component";
import Link from "next/link";
import SwitcherThemeComponent from "@/components/sideBar/SwitcherTheme.component";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "@/redux/slice/activeComponentSlice";


const SideActionBarComponent = () => {
 const dispatch =useDispatch();



    return(
        <div className="bg-[#FFFFFF] rounded-tr-[32px] rounded-br-[32px] w-[281px] py-[13px]">
            <div className="px-[16px] flex flex-col items-center">
                <div className="flex flex-col items-center gap-y-[8px]">
                    <Image src="/img/logoEmblemDashboard.svg" alt="Logo" width={72} height={74}/>
                    <Image src="/img/logoNameDashboard.svg" alt="Name" width={249} height={25}/>
                </div>
                <ProfileButtonComponent name="Test" link="/dashboard/profile"/>
                <ActionSectionComponent/>
            </div>
            <div className="w-full h-[1.17px] bg-[#99B2C6] my-[13.55px]"></div>
            <div className="px-[16px] flex flex-col items-center">
                <ActionSectionFavouritesFolderComponent/>
            </div>
            <div className="w-full h-[1.17px] bg-[#99B2C6] my-[1.21px]"></div>
            <p className="text-[16.07px] font-[500] text-[#99B2C6] ml-[4.88px]">En son eklenenler</p>
            <div className="w-full h-[1.17px] bg-[#99B2C6] my-[1.21px]"></div>
            <div className="pl-[53.46px] mt-[119.61px] flex flex-col">
                <p className="text-[#A6A6A6] font-[700] text-[14px]">Ayarlar</p>
                <Link href="/dashboard/profile" className="flex gap-[11px] text-[#99B2C6] font-[700] text-[20px] mt-[23.32px] items-center"><Image src="/img/elemSideBarSettings1.svg" alt="settings" width={28} height={28}/>Profil</Link>
                <Link href="#" className="flex gap-[11px] text-[#99B2C6] font-[700] text-[20px] items-center ml-[4px] mt-[5.7px]"><Image src="/img/elemSideBarSettings2.svg"alt="settings"  width={20} height={20}/>Ayarlar</Link>
            </div>
            <div className="flex w-full justify-center items-center mt-[26.72px]">
                <SwitcherThemeComponent/>
            </div>
            <p className="text-[#99B2C6] font-[700] text-[12px] flex gap-[12px] items-center justify-center mt-[18px]"><span className="text-[16px]">©</span> Mythemis vision 2024</p>
        </div>
    )
}
export default SideActionBarComponent
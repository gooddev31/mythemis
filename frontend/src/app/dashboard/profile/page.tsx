import NavBarComponent from "@/components/navbar/navBar.component";
import ProfileSection from "@/app/dashboard/profile/components/profileSection.component";
import SideActionBarComponent from "@/components/sideBar/sideActionBar.component";

const Profile = () => {

    return (
        <div className="py-[65px] px-[45px] bg-[#F1F4FA] flex gap-[28px] font-quicksand">
            <SideActionBarComponent />
            <div>
                <NavBarComponent />
                <div className="flex w-full">
                    <ProfileSection />
                </div>
            </div>
        </div>
    )
}
export default Profile;
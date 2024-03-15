import SideActionBarComponent from "@/app/dashboard/components/sideActionBar.component";
import MainSectionComponent from "@/app/dashboard/components/mainSection.component";
import RideSideActionComponent from "@/app/dashboard/components/rideSideAction.component";

const Dashboard = () => {
    return(
        <div className="py-[65px] px-[45px] bg-[#F1F4FA] flex gap-[37px] font-quicksand">
            <SideActionBarComponent/>
            <MainSectionComponent/>
            <RideSideActionComponent/>
        </div>
    )
}
export default Dashboard;
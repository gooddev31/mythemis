import SideActionBarComponent from "@/app/dashboard/components/sideActionBar.component";
import MainSectionComponent from "@/app/dashboard/components/mainSection.component";

const Dashboard = () => {
    return(
        <div className="py-[65px] px-[45px] bg-[#F1F4FA] flex justify-between font-quicksand">
            <SideActionBarComponent/>
            <MainSectionComponent/>
        </div>
    )
}
export default Dashboard;
import MainSectionSearchBarComponent from "@/components/navbar/mainSectionSearchBar.component";
import MainSectionNewsBannerComponent from "@/app/dashboard/components/mainSectionNewsBanner.component";
import MainSectionLastTasksComponent from "@/app/dashboard/components/mainSectionLastTasks.component";


const MainSectionComponent = () => {
    return(
        <div className="w-full">
            <MainSectionNewsBannerComponent/>
            <MainSectionLastTasksComponent/>
        </div>
    )
}
export default MainSectionComponent;
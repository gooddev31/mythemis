import MainSectionSearchBarComponent from "@/app/dashboard/components/mainSectionSearchBar.component";
import MainSectionNewsBannerComponent from "@/app/dashboard/components/mainSectionNewsBanner.component";
import MainSectionLastTasksComponent from "@/app/dashboard/components/mainSectionLastTasks.component";


const MainSectionComponent = () => {
    return(
        <div>
            <MainSectionSearchBarComponent/>
            <MainSectionNewsBannerComponent/>
            <MainSectionLastTasksComponent/>
        </div>
    )
}
export default MainSectionComponent;
import MainSectionSearchBarComponent from "@/components/navbar/mainSectionSearchBar.component";
import RideSideActionProfileContainer from "@/components/navbar/rideSideActionProfileContrainer";


const NavBarComponent = () => {
    return(
        <div className=" flex gap-[28px] w-full">
            <MainSectionSearchBarComponent/>
            <RideSideActionProfileContainer/>
            
        </div>
    )
}
export default NavBarComponent;
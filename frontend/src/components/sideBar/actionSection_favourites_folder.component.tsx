import {actionSectionFavouritesFolderArray} from "@/components/sideBar/actionSection_favourites_folder.array";
import ActionSectionFavouritesFolderItemComponent
    from "@/components/sideBar/actionSection_favourites_folder_item.component";

const ActionSectionFavouritesFolderComponent = () => {
    return(
        <div className="w-full flex flex-col px-[10px] gap-y-[13.55px]">
            {actionSectionFavouritesFolderArray.map((el, id: number = 0) => <ActionSectionFavouritesFolderItemComponent {...el} key={id++}/>)}
        </div>
    )
}
export default ActionSectionFavouritesFolderComponent;
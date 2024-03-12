"use client"
import {ActionSection_itemsArray} from "@/app/dashboard/components/actionSection_items.array";
import ActionSection_itemComponent from "@/app/dashboard/components/actionSection_item.component";
import ActionSection_item_favouriteComponent from "@/app/dashboard/components/actionSection_item_favourite.component";
import {useState} from "react";
import ActionSectionItemFavouriteModalFormComponent
    from "@/app/dashboard/components/actionSection_item_favourite_modalForm.component";

const ActionSectionComponent = () => {
    const [stateOpen, setStateOpen] = useState<boolean>(false);
    return(
        <div className="flex flex-col gap-y-[14.76px] mt-[28px]">
            {ActionSection_itemsArray.map((el) => <ActionSection_itemComponent {...el} key={el.key}/>)}
            <ActionSection_item_favouriteComponent setStateOpen={setStateOpen} stateOpen={stateOpen}/>
            <ActionSectionItemFavouriteModalFormComponent status={stateOpen}/>
        </div>
    )
}
export default ActionSectionComponent
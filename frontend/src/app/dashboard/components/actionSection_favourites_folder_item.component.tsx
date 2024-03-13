"use client"
import ActionSectionFavouritesFileItemComponent, {
    IActionSectionFavouritesFileItemComponent
} from "@/app/dashboard/components/actionSection_favourites_file_item.component";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export interface IActionSectionFavouritesFolderItemComponent {
    name: string,
    link: string,
    items?: Array<IActionSectionFavouritesFileItemComponent>
}

const ActionSectionFavouritesFolderItemComponent = (props: IActionSectionFavouritesFolderItemComponent) => {
    const [openFav, setOpenFav] = useState<boolean>(false)
    return(
        <div className="w-full">
            <button onClick={() => setOpenFav(!openFav)} className="flex justify-between w-full text-[15.81px] text-[#99B2C6] font-[500] transition hover:bg-[#E9E9E9]">
                <span className="flex items-center gap-[6.78px]">
                    <Image src="/img/elemSideBarFav2.svg" alt="" width={18.07} height={18.07}/>{props.name}</span>
                    {props.items
                        ?openFav
                            ?<span className="transition rotate-90">{">"}</span>
                            :<span className="transition">{">"}</span>
                        : null}
            </button>
            {openFav && props.items?
                <div className="ml-[23px] flex flex-col gap-y-[6.78px] my-[6.78px] transition">
                    {props.items?.map((el, id:number = 0) => <ActionSectionFavouritesFileItemComponent {...el} key={id++}/>)}
                </div>
                :
                <div className="ml-[23px] flex flex-col gap-y-[6.78px] hidden h-[0px] ">
                    {props.items?.map((el, id:number = 0) => <ActionSectionFavouritesFileItemComponent {...el} key={id++}/>)}
                </div>
            }
        </div>
    )
}
export default ActionSectionFavouritesFolderItemComponent
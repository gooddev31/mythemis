import Link from "next/link";
import Image from "next/image";
export interface IActionSectionFavouritesFileItemComponent {
    name:string
    link:string
}

const ActionSectionFavouritesFileItemComponent = (props: IActionSectionFavouritesFileItemComponent) => {
    return(
        <Link href={props.link} className="flex gap-[6.78px] text-[#99B2C6] font-[500] text-[15.81px] transition hover:bg-[#E9E9E9]"><Image src="/img/elemSideBarFav1.svg" alt="" width={18.07} height={18.07}/>{props.name}</Link>
    )
}
export default ActionSectionFavouritesFileItemComponent
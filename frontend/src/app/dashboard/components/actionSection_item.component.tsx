import Link from "next/link";
import Image from "next/image";
import {IActionSection_itemsArray} from "@/app/dashboard/components/actionSection_items.array";
const ActionSection_itemComponent = (props: IActionSection_itemsArray) => {
    return(
        <Link href={props.link || "#"} className="flex gap-[13px] text-[20px] text-[#99B2C6] font-[700] hover:bg-[#E9E9E9] transition">
            <Image src={props.img} alt="" width={24} height={24}/>
            {props.name}
        </Link>
    )
}
export default ActionSection_itemComponent;
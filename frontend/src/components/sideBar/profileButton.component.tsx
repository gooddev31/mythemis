import Link from "next/link";
import Image from "next/image";
const ProfileButtonComponent = (props:{name: string, link: string}) => {
    return(
        <button className="w-[205px] h-[46.61px] rounded-full bg-[#000000] text-[#FFFFFF] mt-[23px] flex justify-center items-center">
            <Link href={props?.link || "#"} className="flex flex-row text-[20px] font-[700] gap-[19px]">
                <Image src="/img/buttonDashboardIcon.svg" alt="" width={18} height={18}/>{props.name}
            </Link>
        </button>
    )
}
export default ProfileButtonComponent;
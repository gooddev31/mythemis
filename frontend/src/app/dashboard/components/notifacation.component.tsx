import Image from "next/image";

const NotificationComponent = () => {
    return(
        <button className="bg-[#FFFFFF] w-[65px] h-[65px] rounded-[20px] flex items-center justify-center">
            <Image src="/img/notification.svg" width={29} height={29} alt=""/>
        </button>
    )
}
export default NotificationComponent
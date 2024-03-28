"use client"
import Image from "next/image";
import { useState } from "react";
import { HStack, VStack } from "../common/Stack";
import NotificationItemComponent from "./notificationItem.component";

const NotificationComponent = () => {
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    return (
        <>
            <button onClick={() => setNotificationOpen(!isNotificationOpen)} className="z-[200] bg-[#FFFFFF] w-[65px] h-[65px] rounded-[20px] flex items-center justify-center">
                <Image src="/img/notification.svg" width={29} height={29} alt="" />
            </button>
            {/* notifications */}
            {isNotificationOpen ? (<div className=" absolute mt-[90px] translate-x-[-100%] z-[200] w-[550px] h-[862px] rounded-[18px]  bg-white">
                <VStack align="center"  className="h-[150px]">
                    <div className="ml-[40px] text-black text-[38.48px] font-bold font-['Quicksand'] leading-[50.32px]">Bildirimler</div>
                </VStack>
                <HStack className="pl-[32px] pr-[50px]  gap-[14px] w-ful">
                    <NotificationItemComponent message="29 yeni emsal karar." date="3g" />
                    <NotificationItemComponent message="message" date="3g" />
                </HStack>
            </div>) : ""}

            {/* overlay */}
            {isNotificationOpen ? (<div onClick={() => setNotificationOpen(false)} className=" fixed top-0 left-0 z-[100] w-[100vw] h-[100vh]  bg-neutral-400 bg-opacity-50"></div>) : ""}

        </>
    )
}
export default NotificationComponent
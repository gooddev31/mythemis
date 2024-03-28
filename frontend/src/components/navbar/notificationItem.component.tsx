import { HStack, VStack } from "../common/Stack";
import Image from "next/image";


interface NotificationItemProps {
    message: string;
    date: string;
}


const NotificationItemComponent: React.FC<NotificationItemProps> = ({ message, date }) => {

    return (
        <VStack className="w-full">
            <VStack className="w-full">
                <Image src="/img/notificationItem.svg" width={100} height={100} alt="notification item" />
                <VStack align="center" justify="between" className="w-full h-[100px]">
                    <VStack className="text-slate-400 text-[17px] font-bold font-['Quicksand'] leading-snug" align="center">{message}</VStack>
                    <VStack  align="start" className="mt-[21px] h-full text-zinc-400 text-[15px] font-semibold font-['Quicksand'] leading-[23px]h-full">{date}</VStack>
                </VStack>
                
            </VStack>



        </VStack>
    )
}

export default NotificationItemComponent;
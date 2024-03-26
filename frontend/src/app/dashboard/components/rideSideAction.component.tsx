import RideSideActionProfileContainer from "@/app/dashboard/components/rideSideActionProfileContrainer";
import RideSideCalendarComponent from "@/app/dashboard/components/rideSideCalendar.component";
import RideSideAiChatComponent from "./rideSideAiChat.component";

const RideSideActionComponent = () => {
    return(
        <div className="flex flex-col pr-[60.61px]">
            <RideSideActionProfileContainer/>
            <RideSideCalendarComponent/>
            <RideSideAiChatComponent />
        </div>
    )
}
export default RideSideActionComponent
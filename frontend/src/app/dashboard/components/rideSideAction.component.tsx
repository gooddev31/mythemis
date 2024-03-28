import RideSideActionProfileContainer from "@/components/navbar/rideSideActionProfileContrainer";
import RideSideCalendarComponent from "@/app/dashboard/components/rideSideCalendar.component";
import RideSideAiChatComponent from "./rideSideAiChat.component";

const RideSideActionComponent = () => {
    return(
        <div className="flex flex-col">
            <RideSideCalendarComponent/>
            <RideSideAiChatComponent />
        </div>
    )
}
export default RideSideActionComponent
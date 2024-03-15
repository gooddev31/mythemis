import RideSideActionProfileContainer from "@/app/dashboard/components/rideSideActionProfileContrainer";
import RideSideCalendarComponent from "@/app/dashboard/components/rideSideCalendar.component";

const RideSideActionComponent = () => {
    return(
        <div className="flex flex-col pr-[60.61px]">
            <RideSideActionProfileContainer/>
            <RideSideCalendarComponent/>
        </div>
    )
}
export default RideSideActionComponent
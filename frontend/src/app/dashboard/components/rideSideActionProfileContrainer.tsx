import DateComponent from "@/app/dashboard/components/dateComponent";
import AvatarComponent from "@/app/dashboard/components/avatar.component";
import NotificationComponent from "@/app/dashboard/components/notifacation.component";


const RideSideActionProfileContainer = () => {
    return(
        <div className="flex gap-[21px]">
            <DateComponent/>
            <div className="flex gap-[18px]">
                <NotificationComponent/>
                <AvatarComponent name="test"/>
            </div>
        </div>
    )
}
export default RideSideActionProfileContainer;
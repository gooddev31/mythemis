import DateComponent from "@/components/navbar/dateComponent";
import AvatarComponent from "@/components/navbar/avatar.component";
import NotificationComponent from "@/components/navbar/notifacation.component";


const RideSideActionProfileContainer = () => {
    return(
        <div className="flex gap-[21px] w-[441px]">
            <DateComponent/>
            <div className="flex gap-[18px]">
                <NotificationComponent/>
                <AvatarComponent name="test"/>
            </div>
        </div>
    )
}
export default RideSideActionProfileContainer;
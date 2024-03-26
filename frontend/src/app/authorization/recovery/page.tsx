import AuthFormComponent from "@/app/authorization/components/authForm.component";
import BannerComponent from "@/app/authorization/components/banner.componet";
const RecoveryPage = () => {
    return(
        <div className="relative p-[36px] inline-block">
            <div className="relative">
                <AuthFormComponent type="recovery"/>
                <BannerComponent type={"login"}/>
            </div>
        </div>
    )
}
export default RecoveryPage;

import AuthFormComponent from "@/app/authorization/components/authForm.component";
import BannerComponent from "@/app/authorization/components/banner.componet";
const LoginPage = () => {
    return(
        <div className="relative p-[36px] inline-block">
            <div className="relative">
                <AuthFormComponent type="login"/>
                <BannerComponent type={"login"}/>
            </div>
        </div>
    )
}
export default LoginPage;

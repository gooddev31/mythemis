import AuthFormComponent from "@/app/authorization/components/authForm.component";
import BannerComponent from "@/app/authorization/components/banner.componet";
const RegisterPage = () => {
    return(
        <div className="relative p-[36px] inline-block">
            <div className="relative">
                <AuthFormComponent type="register"/>
                <BannerComponent type={"register"}/>
            </div>
        </div>
    )
}
export default RegisterPage;

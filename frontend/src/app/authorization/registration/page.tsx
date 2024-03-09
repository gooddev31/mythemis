import AuthForm from "@/app/authorization/components/authForm";
import BannerComponent from "@/app/authorization/components/bannerComponet";
const RegisterPage = () => {
    return(
        <div className="relative p-[36px] inline-block">
            <div className="relative">
                <AuthForm type="register"/>
                <BannerComponent type={"register"}/>
            </div>
        </div>
    )
}
export default RegisterPage;

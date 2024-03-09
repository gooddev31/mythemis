import AuthForm from "@/app/authorization/components/authForm";
import BannerComponent from "@/app/authorization/components/bannerComponet";
const LoginPage = () => {
    return(
        <div className="relative p-[36px] inline-block">
            <div className="relative">
                <AuthForm type="login"/>
                <BannerComponent type={"login"}/>
            </div>
        </div>
    )
}
export default LoginPage;

"use client"
import Image from "next/image";
import FormSection from "@/app/authorization/components/form";
const AuthForm = () => {
    return(
        <div className="w-[836.52px] flex items-center justify-center bg-[#FFFFFF] pt-[128px] pb-[23.35px] pl-[82.16px] rounded-[19px]">
            <div className="container">
                <Image
                    priority
                    src="/img/authLogo.svg"
                    width={446}
                    height={59}
                    alt="Logo"
                />
                <div className="ml-[28.24px] mt-[66px] w-[521px]">
                    <h3 className='font-quicksand font-[700] text-[32px]'>Giriş yapın.</h3>
                    <FormSection/>
                </div>
                <p className="mt-[192.35px] text-[#99B2C6] font-[700] text-[12px]">Mythemis vision 2024</p>
            </div>
        </div>
    )
}
export default AuthForm;
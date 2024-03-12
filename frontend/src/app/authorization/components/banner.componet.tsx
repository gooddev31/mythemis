import Image from "next/image";
const BannerComponent = (props:{type: "login" | "register"}) => {
    return(
        <div className="flex flex-col justify-end w-[1154.43px] absolute h-full top-0 left-[690px]  from-[#000000] from-0% via-[#2E2E2E] via-85% to-[#000000] to-[98.26%] rounded-[22.82px] bg-gradient-100 pl-[66.64px] pb-[105.3px] overflow-hidden">
            <Image src="/img/authLogo.svg" priority height={62} width={456} alt="Logo" className="invert"/>
            <h1 className="w-[731.11px] font-[700] text-[60px] text-[#ffffff] mt-[50.69px]">AI ile Hukukta Devrim Sözleşmelerden İçtihatlara Anında Erişim</h1>
            <div className="relative">

                {props.type === "login"? <Image src="/img/elem1Auth.svg" alt="elem" width={632.77} height={622.64} className="absolute bottom-[587px] left-[-80px] w-[632.77px] h-[622.64px]"/>: <Image src="/img/elem1Auth.svg" alt="elem" width={632.77} height={622.64} className="absolute bottom-[1080px] left-[-80px] w-[632.77px] h-[622.64px]"/>}
                {props.type === "register"? <Image src="/img/elem2Auth.svg" alt="elem" width={629.76} height={649.26} className="absolute w-[876.76px] h-[869.26px] right-[-200px] top-[-1270px]"/> : <Image src="/img/elem2Auth.svg" alt="elem" width={629.76} height={649.26} className="absolute w-[876.76px] h-[869.26px] right-[-200px] top-[-970px]"/>}
            </div>
        </div>
    )
}
export default BannerComponent;

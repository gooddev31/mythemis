"use client"
import {useState} from "react";
import Image from "next/image";
const SwitcherThemeComponent = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light")
    if(theme === "light") {
        return(
            <div className="flex gap-[9px] transition">
                <Image src="img/lightmode.svg" width={24} height={24}/>
                <button onClick={() => setTheme("dark")} className="w-[37px] h-[22.49] rounded-full bg-[#99B2C6] px-[1.75px] py-[1.75px]">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#FFFFFF] transition">
                    </div>
                </button>
                <Image src="/img/darkmode.svg" width={24} height={24}/>
            </div>
        )
    }else {
        return(
            <div className="flex gap-[9px] transition">
                <Image src="img/lightmode.svg" alt="" width={24} height={24} className="fill-[#99B2C6]"/>
                <button onClick={() => setTheme("light")} className="w-[37px] h-[22.49] rounded-full bg-[#99B2C6] px-[1.45px] py-[1.75px]">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#FFFFFF] translate-x-[13.35px] transition">
                    </div>
                </button>
                <Image src="/img/darkmode.svg" alt="" width={24} height={24} className="fill-[#00000]"/>
            </div>
        )
    }
}
export default SwitcherThemeComponent;
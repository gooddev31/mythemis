import Image from "next/image";
const MainSectionNewsBannerComponent = () => {
    return(
        <div className="w-[1038.24px] h-[608.21px] from-[#000000] from-0% via-[#2E2E2E] via-85% to-[#000000] to-[98.26%] bg-gradient-100 rounded-[19px] mt-[53.69px] px-[26.65px] pt-[67px] pb-[52px] z-[10] relative">
            <div className="relative">
                <Image src="/img/bubbleMain.svg" alt="Bubble" width={425} height={421} className="absolute end-0 z-0"/>
                <h2 className="text-[#FFFFFF] font-[700] text-[26px]">Hoşgeldiniz.</h2>
                <h1 className="text-[#FFFFFF] font-[700] text-[65.52px] mt-[24px]">Av.Test Demo</h1>
            </div>
            <div className="flex justify-between items-center mt-[28.44px]">
                <div className="from-[#FDF5F5] from-[0.54%] via-[#FFFFFF] via-[47.53%] via-[#555555] via-[110.84%] to-[#3E3E3E] to-[131.07%] bg-gradient-100 w-[469px] h-[267px] rounded-[15px] flex justify-between items-center px-[36px] pt-[73px] pb-[33px] text-center">
                    <div className="flex flex-col justify-center items-center gap-y-[23px]">
                        <div className="w-[109px] h-[109px] bg-[url('/img/image2.svg')] bg-no-repeat rounded-full">

                        </div>
                        <p className="p-[5px] bg-[#2C2C2C] rounded-[7.61px] font-[600] text-[14.27px] text-[#FFFFFF]">RESMİ GAZETE</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-[23px]">
                        <div className="w-[109px] h-[109px] bg-[url('/img/image1.svg')] rounded-full">

                        </div>
                        <p className="p-[5px] bg-[#2C2C2C] rounded-[7.61px] font-[600] text-[14.27px] text-[#FFFFFF]">UYAP PORTAL GİRİŞ</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-[23px]">
                        <div className="w-[109px] h-[109px] bg-[url('/img/image3.svg')] bg-no-repeat rounded-full">

                        </div>
                        <p className="p-[5px] bg-[#2C2C2C] rounded-[7.61px] font-[600] text-[14.27px] text-[#FFFFFF]">E-DEVLET GİRİŞ</p>
                    </div>
                </div>
                <div className="w-[469px] h-[267px] rounded-[15px] bg-[#FFFFFF] px-[34px] py-[11px] z-10">
                    <h4 className="font-[700] text-[20px]">Hukuk Haberleri</h4>
                    <div className="mt-[10px]">
                        <p className="w-[373px] font-[600] text-[15px]">Dışişleri Bakan Yardımcısı Yıldız: İsrail'in ihlal etmediği bir hukuk kuralı yok</p>
                        <p className="text-[#747474] text-[12px] font-[600]">TRT HABER</p>
                    </div>
                    <div className="mt-[10px]">
                        <p className="w-[373px] font-[600] text-[15px]">Karaman’da hukuk bürosuna silahlı saldırı</p>
                        <p className="text-[#747474] text-[12px] font-[600]">NTV HABER</p>
                    </div>
                    <div className="mt-[10px]">
                        <p className="w-[373px] font-[600] text-[15px]">Adalet Bakanı Yılmaz Tunç: Kirada yüzde 25 uygulamasına gerek kalmayacak.</p>
                        <p className="text-[#747474] text-[12px] font-[600]">HABERLER</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default MainSectionNewsBannerComponent;
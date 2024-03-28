import Image from "next/image";

const ActionSectionItemFavouriteModalFormComponent = (props: {status: boolean}) => {
    if(props.status) {
        return(
            <div className="z-20 py-[19px] flex flex-col gap-[7px] bg-[#FFFFFF] rounded-[13.6px] absolute top-[595px] left-[333px] transition opacity-1">
                <button className="flex items-center hover:bg-[#E9E9E9] transition gap-[13px] w-[224px] font-500 text-[20px] text-[#99B2C6]"><Image src="/img/elemModalSideBar1.svg" alt="img" width={24} height={24}/>Yeni Klasör Ekle</button>
                <button className="flex items-center hover:bg-[#E9E9E9] transition gap-[13px] w-[224px] font-500 text-[20px] text-[#99B2C6]"><Image src="/img/elemModalSideBar2.svg" alt="img" width={24} height={24}/>Düzenle</button>
                <button className="flex items-center hover:bg-[#E9E9E9] transition gap-[13px] w-[224px] font-500 text-[20px] text-[#99B2C6]"><Image src="/img/elemModalSideBar3.svg" alt="img" width={24} height={24}/>Sil</button>
            </div>
        )
    }else {
        return(
            <div className="z-20 py-[19px] flex flex-col gap-[7px] bg-[#FFFFFF] rounded-[13.6px] absolute top-[595px] left-[333px] transition  hidden opacity-0">
                <button className="flex items-center hover:bg-[#E9E9E9] transition gap-[13px] w-[224px] font-500 text-[20px] text-[#99B2C6]"><Image src="/img/elemModalSideBar1.svg" alt="img" width={24} height={24}/>Yeni Klasör Ekle</button>
                <button className="flex items-center hover:bg-[#E9E9E9] transition gap-[13px] w-[224px] font-500 text-[20px] text-[#99B2C6]"><Image src="/img/elemModalSideBar2.svg" alt="img" width={24} height={24}/>Düzenle</button>
                <button className="flex items-center hover:bg-[#E9E9E9] transition gap-[13px] w-[224px] font-500 text-[20px] text-[#99B2C6]"><Image src="/img/elemModalSideBar3.svg" alt="img" width={24} height={24}/>Sil</button>
            </div>
        )
    }
}
export default ActionSectionItemFavouriteModalFormComponent;
import Image from "next/image";

const ActionSection_item_favouriteComponent = (props: {stateOpen:boolean, setStateOpen: (args: boolean) => void}) => {
    return(
        <button onClick={() => props.setStateOpen(!props.stateOpen)} className="flex items-center w-full justify-between hover:bg-[#E9E9E9] transition">
            <div className="flex items center gap-[13px] text-[#99B2C6] font-[700] text-[20px]">
                <Image src='/img/elemSideBar9.svg' alt="" width={24} height={24}/>
                Favoriler
            </div>
            {props.stateOpen? <span className="text-[#99B2C6] font-[700] text-[20px] rotate-90 transition">{">"}</span>: <span className="text-[#99B2C6] font-[700] text-[20px] rotate-0 transition">{">"}</span>}
        </button>
    )
}
export default ActionSection_item_favouriteComponent;
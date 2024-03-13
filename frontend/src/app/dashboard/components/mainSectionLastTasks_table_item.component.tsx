import {ITask} from "@/app/intefaces/task.inteface";

const MainSectionLastTasksTableItemComponent = async(props: ITask) => {
    return(
        <tr className="text-[15px] font-[500] text-[#747474] border-b-[1px] border-[#E6E6E6] border-spacing-y-[15px] align-middle">
            <td className="h-full flex align-center pt-[19px]"><input type="checkbox" className="w-[18.63px] h-[18.63px] rounded-lg"/></td>
            <td className="pt-[15px] pb-[15px]">{props.name}</td>
            <td className="pt-[15px] pb-[15px]">{props.createDate.toLocaleDateString()}</td>
            <td className="pt-[15px] pb-[15px]">{props.createDate.toLocaleDateString()}</td>
            <td className="pt-[15px] pb-[15px]">{props.createDate.toLocaleDateString()}</td>
            <td className="pt-[15px] pb-[15px]">{props.status?<p className="w-[77.96px] h-[26.49px] bg-[#3FB8A9] rounded-[6.06px] text-[#FFFFFF] text-[11.35px] font-[600] px-[13.48px] py-[4.25px]">Kesinleşti</p>: <p className="w-[77.96px] h-[26.49px] bg-[#FA5757] rounded-[6.06px] text-[#FFFFFF] text-[11.35px] font-[600]  px-[3.48px] py-[4.25px]">Kesinleşmedi</p>}</td>
            <td className="pt-[15px] pb-[15px]"><button className="bg-[#2C2C2C] h-[26.49px] px-[27px] py-[4.5px] rounded-[6.17px] text-[#FFFFFF] text-[11.35px] font-[600]">İndir</button></td>
        </tr>
    )
}
export default MainSectionLastTasksTableItemComponent;
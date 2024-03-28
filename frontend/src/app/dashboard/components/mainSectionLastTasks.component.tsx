import MainSectionLastTasksTable from "@/app/dashboard/components/mainSectionLastTasks_table";
import MainSectionPaginationComponent from "@/app/dashboard/components/mainSectionPagination.component";

const MainSectionLastTasksComponent = () => {
    return(
        <div className="max-h-[487.7px] w-full mt-[35.41px] bg-[#FFFFFF] rounded-[19px] px-[35px] pt-[31px] pb-[16px]">
            <h3 className="font-[700] text-[18px]">Son çıkan emsal kararlar</h3>
            <MainSectionLastTasksTable/>
            <div className="flex gap-[26px] mt-[21.47px]">
                <div className="flex gap-[26px]">
                    <button className="w-[205px] h-[46px] rounded-full bg-[#000000] text-[#FFFFFF] text-[20px] font-[700]">Favorilere Ekle</button>
                    <button className="w-[205px] h-[46px] rounded-full bg-[#000000] text-[#FFFFFF] text-[20px] font-[700]">Seçili Olanları İndir</button>
                </div>
                <MainSectionPaginationComponent/>
            </div>
        </div>
    )
}
export default MainSectionLastTasksComponent;
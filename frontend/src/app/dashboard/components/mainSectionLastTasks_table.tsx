"use client"
import MainSectionLastTasksTableItemComponent
    from "@/app/dashboard/components/mainSectionLastTasks_table_item.component";
import {ITask} from "@/app/intefaces/task.inteface";
import {Suspense} from "react";
import {useSearchParams} from "next/navigation";
import Loading from "../loading"
const MainSectionLastTasksTable = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('query')

    const tables:Array<ITask> = [
        {
            creator: "test",
            name: "test",
            createDate: new Date,
            status: false,
        },
        {
            creator: "test",
            name: "test",
            createDate: new Date,
            status: true,
        }
    ]
    return(
        <table className="mt-[33px] table-auto w-full border-collapse">
            <thead>
                <tr className="w-full font-[700] text-[14px] text-[#99B2C6] border-b-[1px] border-[#E6E6E6]">
                    <td className="flex items-center pb-[15px]"><input type="checkbox" disabled className="w-[18.63px] h-[18.63px] rounded-lg"/></td>
                    <td className="w-[348px] text-start pb-[15px]">Daire</td>
                    <td className="text-start pb-[15px]">Esas</td>
                    <td className="pb-[15px]">Karar</td>
                    <td className="pb-[15px]">Karar Tarihi</td>
                    <td className="pb-[15px]">Karar Durumu</td>
                    <td className="pb-[15px]">İndir</td>
                </tr>
            </thead>
                <Suspense fallback={<Loading/>}>
                    <tbody>
                        {tables.map((el) => <MainSectionLastTasksTableItemComponent {...el} key={el.name + el.createDate}/>)}
                    </tbody>
                </Suspense>
        </table>
    )
}
export default MainSectionLastTasksTable;
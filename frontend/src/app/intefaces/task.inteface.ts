import {ITaskItems} from "@/app/intefaces/task.items.interface";
export interface ITask  {
    creator: string,
    name: string,
    createDate: Date,
    status: boolean,
    favouriteOption?: boolean,
    lastEdit?: Date,
    items?: Array<ITaskItems>,
}
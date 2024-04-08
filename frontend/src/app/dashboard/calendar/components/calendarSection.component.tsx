"use client";
import RideSideCalendarComponent from "../../components/rideSideCalendar.component";
import CalendarComponent from "../page";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ComplianceCalender from "./bigCalendar.component";


const CalendarSectionComponent = () => {

    return (
        <div className="w-full flex-col h-[1070px] bg-white rounded-[18.96px] justify-start items-start inline-flex mt-[58px]">
            
            <div className="w-full flex justify-between h-full">
                <div className="w-500px flex mr-[90px">

                <RideSideCalendarComponent />
                </div>
                <div className="w-full h-full">
                    <ComplianceCalender/>
                </div>
            </div>
        </div>
    )
}
export default CalendarSectionComponent;
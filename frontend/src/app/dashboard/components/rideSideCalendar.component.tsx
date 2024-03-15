"use client"
import {useState} from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/src/stylesheets/datepicker.scss"

const MyContainer = ({ className, children }) => {
    return (
        <div className="relative mt-[50.83px] calendar">
            {children}
        </div>
    );
};

const RideSideCalendarComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const onChange = (dates) => {
        const [start] = dates;
        setStartDate(start);
    };
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
            calendarContainer={MyContainer}
        />
    );
}
export default RideSideCalendarComponent;
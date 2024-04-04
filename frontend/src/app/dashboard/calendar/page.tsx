"use client";
import NavBarComponent from "@/components/navbar/navBar.component";
import SideActionBarComponent from "@/components/sideBar/sideActionBar.component";
import CalendarSectionComponent from "./components/calendarSection.component";

 const CalendarComponent = () =>{

    return(
        <div className="py-[65px] px-[45px] bg-[#F1F4FA] flex gap-[28px] font-quicksand">
        <SideActionBarComponent />
        <div>
            <NavBarComponent />
            <div className="flex w-full">
                <CalendarSectionComponent />
            </div>
        </div>
    </div>
    
    )
 }

 export default CalendarComponent;
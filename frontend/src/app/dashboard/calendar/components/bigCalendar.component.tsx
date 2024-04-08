"use client";
import {
    Calendar as BigCalendar,
    momentLocalizer,
    Views
  } from "react-big-calendar";
  import moment from "moment";
  moment.locale("en-GB");
  //momentLocalizer(moment);
  const localizer = momentLocalizer(moment);

  import './calendar.scss';
  
  
  const events = [
    {
      id: 0,
      title: "Board meeting",
      start: new Date(2018, 0, 29, 9, 0, 0),
      end: new Date(2018, 0, 29, 13, 0, 0),
      resourceId: 1
    },
    {
      id: 1,
      title: "MS training",
      allDay: true,
      start: new Date(2018, 0, 29, 14, 0, 0),
      end: new Date(2018, 0, 29, 16, 30, 0),
      resourceId: 2
    },
    {
      id: 2,
      title: "Team lead meeting",
      start: new Date(2018, 0, 29, 8, 30, 0),
      end: new Date(2018, 0, 29, 12, 30, 0),
      resourceId: 3
    },
    {
      id: 11,
      title: "Birthday Party",
      start: new Date(2018, 0, 30, 7, 0, 0),
      end: new Date(2018, 0, 30, 10, 30, 0),
      resourceId: 4
    }
  ];
  
  
  
  export default function CustomCalendar() {
    console.log(Views.DAY);
    let formats = {
      timeGutterFormat: 'HH:mm',
    }
    
    
    return (
      <div className="bigCalendarContainer">
        <BigCalendar
          selectable
          // toolbar={false}
          localizer={localizer}
          events={events}
          defaultView={Views.DAY}
          
          // views={"day"}
          formats={formats}
          // @ts-ignore
          steps={60}
          defaultDate={new Date(2018, 0, 30)}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
          dateFormat="h t"
        />
      </div>
    );
  }
  
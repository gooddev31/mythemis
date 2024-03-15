"use client"
import Clock from 'react-live-clock';

const DateComponent = () => {
    return(
        <div className="px-[65.5px] py-[19.5px] text-[18ppx] font-[700] flex gap-[5px] bg-[#FFFFFF] rounded-[20px]">
            {new Date().toLocaleDateString()}
            <Clock format={'HH:mm'}
                   ticking={true}
            />
        </div>
    )
}
export default DateComponent;
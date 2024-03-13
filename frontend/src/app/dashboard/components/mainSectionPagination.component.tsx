

const MainSectionPaginationComponent = () => {
    return(
        <div>
            <div className="flex gap-[17.14px]">
                <div className="flex items-center gap-[4.47px]">
                    <button className="flex gap-[2.98px] items-center justify-center w-[53.79px] h-[26.83px] border-[#E9E9E9] border-[0.75px] rounded-[2.98px]"><span>{"<"}</span>Geri</button>
                    <div>

                    </div>
                    <button className="flex gap-[7.15px] items-center justify-center w-[53.79px] h-[26.83px] border-[#E9E9E9] border-[0.75px] rounded-[2.98px]">İleri <span>{">"}</span></button>
                </div>
                <div className="flex items-center gap-[5.91px]">
                    <p className="font-[400] text-[10.43px]">Sayfa</p>
                    <input type="text" placeholder="1" className="w-[38px] h-[26.83px] border-[#E9E9E9] border-[0.75px] rounded-[2.98px]"/>
                    <button className="font-[700] text-[10.43px]">Git</button>
                </div>
            </div>
            <p className="font-[400] text-[10.43px] text-[#313131] mt-[8px]">110-120 of 1,250</p>
        </div>
    )
}
export default MainSectionPaginationComponent;
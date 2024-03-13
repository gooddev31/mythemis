"use client"
import {useRef} from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Image from "next/image";

const MainSectionSearchBarComponent = () => {
    const inputData = useRef()
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term:string) => {
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams)
        if(term) {
            params.set('query', term)
        }else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`);
    },300)
    return(
        <div className="relative">
           <div className="relative">
               <input onChange={() => handleSearch(inputData.current.value)} type="text" className="w-[1039px] h-[65px] rounded-[20px] bg-[#FFFFFF] px-[27px]" placeholder="Ne yapmak istersin?" ref={inputData} defaultValue={searchParams.get('query')?.toString()}/>
               <Image src="/img/search.svg" alt="search" width={33} height={24} className="absolute top-5 left-[980.5px]"/>
           </div>
        </div>
    )
}
export default MainSectionSearchBarComponent;
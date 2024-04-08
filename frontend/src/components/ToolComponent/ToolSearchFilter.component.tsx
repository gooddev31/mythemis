import { VStack, HStack } from "../common/Stack";
import Image from "next/image";
import DateInput from "./ToolSearchFilter.DateInput.component";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#000000', // Це ваш кастомний колір для "primary"
        },
        // Ви також можете додати кастомні кольори для "secondary" і інших станів, якщо потрібно
    },
});


const ToolSearchFilterComponent = () => {
    return (
        <HStack className="w-full">
            <div className="Emsal flex w-full text-black text-2xl font-bold font-['Quicksand'] leading-10 py-[21px] border-b-2  border-neutral-200">AI Dilekçe</div>
            <div className="">
                <div className="mb-[40px] mt-6 w-[654px] h-14 pl-3 pr-6 bg-white rounded-lg border border-neutral-200 justify-start items-center gap-3 inline-flex">
                    <Image src="img/searchFilterIcon.svg" width={16} height={16} alt="searchFilterIcon.svg" />
                    <Image src="img/uploadFilterIcon.svg" width={16} height={16} alt="uploadFilterIcon.svg" />
                    <input placeholder="Ne aramak istersiniz? Kendi Dökümanınız üzerinden de arama yapabilirsiniz." className="text-zinc-400 text-base font-normal font-['Quicksand'] outline-none leading-[23px] h-full w-full" />
                </div>
            </div>
            <VStack className="gap-4">
                <HStack>
                    <div className="BaLamaTarihi text-center text-black text-xs font-semibold font-['Quicksand'] leading-[23px]">Başlama tarihi</div>
                    <DateInput />
                </HStack>
                <HStack>
                    <div className="BaLamaTarihi text-center text-black text-xs font-semibold font-['Quicksand'] leading-[23px]">Başlama tarihi</div>
                    <DateInput />
                </HStack>
                <HStack>
                    <div className="BelgeTRleri text-center text-black text-xs font-semibold font-['Quicksand'] leading-[23px]">Belge Türleri</div>
                    <VStack align="center" className="gap-4">
                        <VStack align="center">
                            <Checkbox  style={{
                                color: "#000000",
                            }}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                    }
                                }} />
                            <div className="AnayasaM text-black text-sm font-normal font-['Quicksand'] leading-[23px]">Anayasa M.</div>
                        </VStack>
                        <VStack align="center">
                            <Checkbox  style={{
                                color: "#000000",
                            }}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                    }
                                }} />
                            <div className="AnayasaM text-black text-sm font-normal font-['Quicksand'] leading-[23px]">Anayasa M.</div>
                        </VStack>
                        <VStack align="center">
                            <Checkbox  style={{
                                color: "#000000",
                            }}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                    }
                                }} />
                            <div className="AnayasaM text-black text-sm font-normal font-['Quicksand'] leading-[23px]">Anayasa M.</div>
                        </VStack>
                        <VStack align="center">
                            <Checkbox  style={{
                                color: "#000000",
                            }}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                    }
                                }} />
                            <div className="AnayasaM text-black text-sm font-normal font-['Quicksand'] leading-[23px]">Anayasa M.</div>
                        </VStack>
                        <div className="Etiket w-[100px] h-[31px] px-2 py-1 bg-black rounded-lg justify-center items-center gap-2.5 inline-flex cursor-pointer">
                            <div className="KesinleMedi text-white text-sm font-normal font-['Quicksand'] leading-[23px]">Filtre Temizle</div>
                        </div>
                    </VStack>
                </HStack>
            </VStack>
        </HStack>
    )
}
export default ToolSearchFilterComponent;
export interface IActionSection_itemsArray {
    name: string
    img: string
    key: string | number
    link?: string
}
interface EnumServicesItems extends Array<IActionSection_itemsArray>{}
export const ActionSection_itemsArray: EnumServicesItems = [
    {
        name: "AI Karar Arama",
        img: "/img/elemSideBar1.svg",
        key: "AIKararArama"
    },
    {
        name: "AI Dava Analizi",
        img: "/img/elemSideBar2.svg",
        key: "AIDavaAnalizi"
    },
    {
        name: "Mythemis’e sorun",
        img: "/img/elemSideBar3.svg",
        key: "Mythemis’eSorun"
    },
    {
        name: "AI Sözleşme",
        img: "/img/elemSideBar4.svg",
        key: "AISözleşme"
    },
    {
        name: "AI Dilekçe",
        img: "/img/elemSideBar5.svg",
        key: "AIDilekçe"
    },
    {
        name: "AI Mevzuat",
        img: "/img/elemSideBar6.svg",
        key: "AIMevzuat"
    },
    {
        name: "Ajanda",
        img: "/img/elemSideBar7.svg",
        key: "Ajanda"
    },
    {
        name: "Takım",
        img: "/img/elemSideBar8.svg",
        key: "Takım"
    },

]
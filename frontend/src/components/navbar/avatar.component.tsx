import Link from "next/link"

interface IAvatar {
    name: string
    img?: string
}

const AvatarComponent = (props: IAvatar) => {
    return (
        <Link href="/dashboard/team">
            <div className={`bg-[#FFFFFF] bg-[${props.img}] w-[65px] h-[65px] flex justify-center items-center uppercase rounded-[20px]`}>
                {Array.from(props.name)[0]}
            </div>
        </Link>
    )
}
export default AvatarComponent
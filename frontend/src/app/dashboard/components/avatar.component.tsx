interface IAvatar {
    name: string
    img?: string
}

const AvatarComponent = (props: IAvatar) => {
    return(
        <div className={`bg-[#FFFFFF] bg-[${props.img}] w-[65px] h-[65px] flex justify-center items-center uppercase rounded-[20px]`}>
            {Array.from(props.name)[0]}
        </div>
    )
}
export default AvatarComponent
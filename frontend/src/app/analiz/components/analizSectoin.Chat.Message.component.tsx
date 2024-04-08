import { HStack, VStack } from '@/components/common/Stack'
import { NextPage } from 'next'
import Image from 'next/image'

interface Props {
    message:string
 }

export const AnalizSectoinUserMessagecomponent: NextPage<Props> = ({ message }) => {
    return (
        <VStack justify='end' className='w-full gap-2' align='center'>
            <VStack className=" w-[778px] px-5 py-2 bg-black rounded-lg items-center gap-2.5 inline-flex">
                <VStack align='start' className=" text-white text-base font-normal font-['Quicksand'] leading-[23px]">{message}</VStack>
            </VStack>
            <Image src="img/logoMediumBlack.svg" width={40} height={40} alt='avatar' />
        </VStack>
    )
}
export const AnalizSectoinChatMessagecomponent: NextPage<Props> = ({ message }) => {
    return (
        <VStack justify='start' className='w-full gap-2' align='center'>
            <Image src="img/logoMediumBlack.svg" width={40} height={40} alt='avatar' />
            <VStack className=" w-[778px] px-5 py-2 bg-slate-100 rounded-lg items-center gap-2.5 inline-flex">
                <VStack align='start' className=" text-zinc-800 text-base font-normal font-['Quicksand'] leading-[23px]">{message}</VStack>
            </VStack>
            
        </VStack>
    )
}


import { FC } from 'react';
import Image from 'next/image';
import { VStack } from '@/components/common/Stack';
import { Text } from '@/components/common/Text';

interface ChatAnswerProps {
    text: string;
}


const ChatAnswer: FC<ChatAnswerProps> = ({ text }) => {
    return (
        <VStack className="w-full" align="start">
            <Image
                priority
                src="/img/logoMediumBlack.svg"
                width={64}
                height={64}
                alt="Logo"
            />
            <VStack className="ml-[18px]">
                <Text className="bg-neutral-200 rounded-md py-[7px] px-[7px] mt-[10px]" Tag="p" text={text} size="xs" />
            </VStack>
        </VStack>
    );
};

const ChatMessage: FC<ChatAnswerProps> = ({ text }) => {
    return (
        <VStack className="rounded-md pl-[98px] w-full">
            <VStack className="bg-black rounded-md  w-full min-h-[30px] pl-3 pe-5 py-3 mb-3" align="center">
                <Text text={text} Tag="p" size="xs" color="white" align="right" />
            </VStack>
        </VStack>
    )
}

export { ChatAnswer, ChatMessage };

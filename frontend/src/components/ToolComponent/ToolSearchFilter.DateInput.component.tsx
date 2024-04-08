// components/DateInput.tsx
import { ChangeEvent, useState } from 'react';
import { VStack } from '../common/Stack';
import Image from 'next/image';

const DateInput: React.FC = () => {
    const [value, setValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue: string = e.target.value.replace(/[^\d]/g, '').slice(0, 8); // Видаляємо всі нецифрові символи та обмежуємо довжину
        if (inputValue.length > 4) {
            inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2, 4)}/${inputValue.slice(4)}`; // дд/мм/рррр
        } else if (inputValue.length > 2) {
            inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`; // дд/мм
        }
        setValue(inputValue);
    };

    return (
        <VStack className='px-[15.49px] py-[8.26px] bg-white rounded-lg border border-neutral-200 justify-start items-center gap-[8.26px] inline-flex' align='center'>
            <Image src="img/Calendar.svg" width={24} height={24} alt='calendar icon' />

            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className="mt-1 flex w-[100px] border border-none outline-none rounded-md focus:outline-none"
                placeholder="дд/мм/рррр"
            />
            <Image onClick={()=>setValue("")} src="img/SearchClearIcon.svg" width={24} height={24} alt='clear icon' />
        </VStack>
    );
};

export default DateInput;

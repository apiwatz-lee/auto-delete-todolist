import React from 'react';
import { FoodItem } from '../types/food';

interface Props {
  label: string;
  selectedList: FoodItem[];
  type: string;
  onRemove: (food: FoodItem) => void;
}

const Column: React.FC<Props> = ({ label, selectedList, type, onRemove }) => {
  return (
    <section className='container-fruits border border-gray-200 w-full'>
      <h2 className='border border-gray-200 bg-gray-100 text-center p-2 font-semibold'>
        {label}
      </h2>

      <div className='p-2 flex flex-col gap-2'>
        {selectedList
          .filter((item) => item?.type === type)
          .map((fruit) => (
            <button
              className='text-center p-2 border border-gray-200 w-full cursor-pointer hover:bg-gray-50'
              key={fruit?.name}
              onClick={() => onRemove(fruit)}
            >
              {fruit?.name}
            </button>
          ))}
      </div>
    </section>
  );
};

export default Column;

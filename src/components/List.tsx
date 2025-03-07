import React from 'react';
import { FoodItem } from '../types/food';

interface Props {
  dataList: FoodItem[];
  onSelect: (food: FoodItem) => void;
}

const List: React.FC<Props> = ({ dataList, onSelect }) => {
  return (
    <section className='container-list mr-4 flex flex-col gap-2'>
      {dataList.map((food: FoodItem) => (
        <button
          className='text-center p-4 border border-gray-200 cursor-pointer hover:bg-gray-50'
          key={food?.name}
          onClick={() => onSelect(food)}
        >
          {food?.name}
        </button>
      ))}
    </section>
  );
};

export default List;

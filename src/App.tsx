import { data } from './data/vegetables';
import { useEffect, useState } from 'react';
import { FoodItem } from './types/food';

function App() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>(data);
  const [selectedVegetable, setSelectedVegetable] = useState<FoodItem[]>([]);

  const handleFoodSelection = (food: FoodItem) => {
    setFoodItems((prev) => prev.filter((item) => item.name !== food.name));
    setSelectedVegetable((prev) => [...prev, food]);
  };

  const autoDelete = () => {
    setSelectedVegetable((prev) => prev.slice(1));
    setFoodItems((prev) => [...prev, selectedVegetable[0]]);
  };

  useEffect(() => {
    if (selectedVegetable.length === 0) return;

    const timer = setTimeout(() => autoDelete(), 5000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVegetable]);

  return (
    <>
      <main className='container mx-auto  grid grid-cols-3 gap-1 h-screen p-4 '>
        <section className='container-list mr-4 flex flex-col gap-2'>
          {foodItems.map((food: FoodItem) => (
            <div
              className='text-center p-4 border border-gray-200 cursor-pointer hover:bg-gray-50'
              key={food?.name}
              onClick={() => handleFoodSelection(food)}
            >
              {food?.name}
            </div>
          ))}
        </section>

        <section className='container-fruits border border-gray-200'>
          <h2 className='border border-gray-200 bg-gray-100 text-center p-2 font-semibold'>
            Fruits
          </h2>

          {selectedVegetable
            .filter((item) => item?.type === 'Fruit')
            .map((fruit) => (
              <div
                className='text-center p-2 border border-gray-200 m-2'
                key={fruit?.name}
              >
                {fruit?.name}
              </div>
            ))}
        </section>

        <section className='container-vegetable border border-gray-200'>
          <h2 className='border border-gray-200 bg-gray-100 text-center p-2 font-semibold'>
            Vegetables
          </h2>

          {selectedVegetable
            .filter((item) => item?.type === 'Vegetable')
            .map((vegetable) => (
              <div
                className='text-center p-2 border border-gray-200 m-2'
                key={vegetable?.name}
              >
                {vegetable?.name}
              </div>
            ))}
        </section>
      </main>
    </>
  );
}

export default App;

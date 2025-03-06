import { data } from './data/vegetables';
import { useState } from 'react';
import { FoodItem, SelectedFoodItem } from './types/food';

function App() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>(data);
  const [selectedVegetable, setSelectedVegetable] = useState<SelectedFoodItem>({
    fruits: [],
    vegetables: [],
  });

  const handleFoodSelection = (food: FoodItem) => {
    setFoodItems((prev) => prev.filter((item) => item.name !== food.name));

    if (food?.type === 'Fruit') {
      setSelectedVegetable((prev) => ({
        ...prev,
        fruits: [...prev.fruits, food],
      }));
    }

    if (food?.type === 'Vegetable') {
      setSelectedVegetable((prev) => ({
        ...prev,
        vegetables: [...prev.vegetables, food],
      }));
    }
  };

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

          {selectedVegetable?.fruits?.map((fruit) => (
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

          {selectedVegetable?.vegetables?.map((vegetable) => (
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

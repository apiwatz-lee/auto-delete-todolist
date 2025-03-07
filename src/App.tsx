import { data } from './data/vegetables';
import { useEffect, useState } from 'react';
import { FoodItem } from './types/food';
import Column from './components/Column';
import List from './components/List';

function App() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>(data);
  const [selectedFoods, setSelectedFoods] = useState<FoodItem[]>([]);

  const handleFoodSelection = (food: FoodItem) => {
    setFoodItems((prev) => prev.filter((item) => item.name !== food.name));
    setSelectedFoods((prev) => [...prev, { ...food, timeStamp: Date.now() }]);
  };

  useEffect(() => {
    if (selectedFoods.length > 0) {
      const interval = setInterval(() => {
        setSelectedFoods((prevFoods) =>
          prevFoods.filter(
            (item) => Math.abs(item.timeStamp - Date.now()) <= 5000
          )
        );
      }, 500);

      return () => clearInterval(interval);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFoods]);

  return (
    <>
      <main className='container mx-auto  grid grid-cols-3 gap-1 h-screen p-4 '>
        <List dataList={foodItems} onSelect={handleFoodSelection} />
        <Column label='Fruits' selectedList={selectedFoods} type='Fruit' />
        <Column
          label='Vegetables'
          selectedList={selectedFoods}
          type='Vegetable'
        />
      </main>
    </>
  );
}

export default App;

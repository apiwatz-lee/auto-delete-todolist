import { useState, useEffect } from 'react';
import { FoodItem } from '../types/food';
import { data } from '../data/vegetables';

const useFoodList = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>(data);
  const [selectedFoods, setSelectedFoods] = useState<FoodItem[]>([]);
  const handleFoodSelection = (food: FoodItem): void => {
    setFoodItems((prev) => prev.filter((item) => item.name !== food.name));
    setSelectedFoods((prev) => [...prev, { ...food, timeStamp: Date.now() }]);
  };

  const handleRemoveFood = (food: FoodItem): void => {
    setSelectedFoods((prev) => prev.filter((item) => item.name !== food.name));
    setFoodItems((prev) => [...prev, food]);
  };

  useEffect(() => {
    if (selectedFoods.length > 0) {
      const interval = setInterval(() => {
        setSelectedFoods((prevFoods) =>
          prevFoods.filter(
            (item) =>
              item?.timeStamp && Math.abs(item?.timeStamp - Date.now()) <= 5000
          )
        );

        setFoodItems((prevFoods) => [
          ...prevFoods,
          ...selectedFoods.filter(
            (item) =>
              item?.timeStamp && Math.abs(item.timeStamp - Date.now()) > 5000
          ),
        ]);
      }, 500);

      return () => clearInterval(interval);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFoods]);
  return {
    foodItems,
    selectedFoods,
    handleFoodSelection,
    handleRemoveFood,
  };
};

export default useFoodList;

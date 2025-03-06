type FoodType = 'Fruit' | 'Vegetable';

export interface FoodItem {
  type: FoodType;
  name: string;
}

export interface SelectedFoodItem {
  fruits: FoodItem[];
  vegetables: FoodItem[];
  [key: string]: FoodItem[];
}

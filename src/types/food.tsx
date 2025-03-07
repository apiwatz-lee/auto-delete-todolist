type FoodType = 'Fruit' | 'Vegetable';

export interface FoodItem {
  type: FoodType;
  name: string;
  timeStamp?: number;
}

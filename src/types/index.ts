export interface Food {
  name: string;
  emoji: string;
  japanese: string;
}

export interface FoodWithIndex {
  food: Food;
  index: number;
}
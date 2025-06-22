import { Food, FoodWithIndex } from '../types';

export const foods: Food[] = [
  // Fruits
  { name: 'apple', emoji: '🍎', japanese: 'りんご' },
  { name: 'banana', emoji: '🍌', japanese: 'バナナ' },
  { name: 'orange', emoji: '🍊', japanese: 'オレンジ' },
  { name: 'grape', emoji: '🍇', japanese: 'ぶどう' },
  { name: 'strawberry', emoji: '🍓', japanese: 'いちご' },
  { name: 'peach', emoji: '🍑', japanese: 'もも' },
  { name: 'pineapple', emoji: '🍍', japanese: 'パイナップル' },
  { name: 'watermelon', emoji: '🍉', japanese: 'すいか' },
  { name: 'cherry', emoji: '🍒', japanese: 'さくらんぼ' },
  { name: 'lemon', emoji: '🍋', japanese: 'レモン' },
  { name: 'kiwi', emoji: '🥝', japanese: 'キウイ' },
  { name: 'coconut', emoji: '🥥', japanese: 'ココナッツ' },
  { name: 'mango', emoji: '🥭', japanese: 'マンゴー' },
  { name: 'avocado', emoji: '🥑', japanese: 'アボカド' },
  { name: 'blueberry', emoji: '🫐', japanese: 'ブルーベリー' },
  
  // Vegetables
  { name: 'tomato', emoji: '🍅', japanese: 'トマト' },
  { name: 'eggplant', emoji: '🍆', japanese: 'なす' },
  { name: 'carrot', emoji: '🥕', japanese: 'にんじん' },
  { name: 'corn', emoji: '🌽', japanese: 'とうもろこし' },
  { name: 'pepper', emoji: '🌶️', japanese: 'とうがらし' },
  { name: 'cucumber', emoji: '🥒', japanese: 'きゅうり' },
  { name: 'lettuce', emoji: '🥬', japanese: 'レタス' },
  { name: 'broccoli', emoji: '🥦', japanese: 'ブロッコリー' },
  { name: 'onion', emoji: '🧅', japanese: 'たまねぎ' },
  { name: 'garlic', emoji: '🧄', japanese: 'にんにく' },
  { name: 'potato', emoji: '🥔', japanese: 'じゃがいも' },
  { name: 'mushroom', emoji: '🍄', japanese: 'きのこ' },
  
  // Meat & Fish
  { name: 'chicken', emoji: '🍗', japanese: 'チキン' },
  { name: 'bacon', emoji: '🥓', japanese: 'ベーコン' },
  { name: 'shrimp', emoji: '🍤', japanese: 'えび' },
  { name: 'fish', emoji: '🐟', japanese: 'さかな' },
  { name: 'crab', emoji: '🦀', japanese: 'かに' },
  { name: 'lobster', emoji: '🦞', japanese: 'ロブスター' },
  
  // Dairy & Eggs
  { name: 'cheese', emoji: '🧀', japanese: 'チーズ' },
  { name: 'egg', emoji: '🥚', japanese: 'たまご' },
  { name: 'milk', emoji: '🥛', japanese: 'ミルク' },
  
  // Grains & Bread
  { name: 'bread', emoji: '🍞', japanese: 'パン' },
  { name: 'croissant', emoji: '🥐', japanese: 'クロワッサン' },
  { name: 'pretzel', emoji: '🥨', japanese: 'プレッツェル' },
  { name: 'rice', emoji: '🍚', japanese: 'ごはん' },
  
  // Nuts & Others
  { name: 'peanut', emoji: '🥜', japanese: 'ピーナッツ' },
  { name: 'honey', emoji: '🍯', japanese: 'はちみつ' }
];

export const getRandomFood = (excludeId: number | null = null): FoodWithIndex => {
  const availableFoods = excludeId !== null 
    ? foods.filter((_, index) => index !== excludeId)
    : foods;
  
  const randomIndex = Math.floor(Math.random() * availableFoods.length);
  const selectedFood = availableFoods[randomIndex];
  const originalIndex = foods.findIndex(food => food.name === selectedFood.name);
  
  return { food: selectedFood, index: originalIndex };
};
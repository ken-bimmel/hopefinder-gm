import { FOOD } from "./itemCategories";
import { VITAMINS, WATER_PURIFICATION_TABLETS } from "./medicineItems";

export const BEER = {
  category: FOOD,
  name: "Beer",
  type: "-",
  barter: "3",
  bulk: "L",
  break: "1",
};
export const CANNED_GOODS = {
  category: FOOD,
  name: "Canned Goods",
  type: "-",
  barter: "2",
  bulk: "L",
  break: "1",
};
export const CANNED_GOODS_EXPIRED = {
  category: FOOD,
  name: "Canned Goods, Expired",
  type: "-",
  barter: "1",
  bulk: "L",
  break: "1",
};
export const LIQUOR = {
  category: FOOD,
  name: "Liquor",
  type: "-",
  barter: "4",
  bulk: "L",
  break: "1",
};
export const MEAT_FRESH = {
  category: FOOD,
  name: "Meat, Fresh",
  type: "-",
  barter: "2",
  bulk: "L",
  break: "1",
};
export const RATION_BAR = {
  category: FOOD,
  name: "Ration, Bar",
  type: "-",
  barter: "1",
  bulk: "L",
  break: "1",
};
export const RATION_DAY = {
  category: FOOD,
  name: "Ration, Day",
  type: "-",
  barter: "3",
  bulk: "L",
  break: "1",
};
export const SOFT_DRINK = {
  category: FOOD,
  name: "Soft Drink",
  type: "-",
  barter: "2",
  bulk: "L",
  break: "1",
};
export const VEGETABLES_FRESH = {
  category: FOOD,
  name: "Vegetables, Fresh",
  type: "-",
  barter: "1",
  bulk: "L",
  break: "1",
};
export const WATER = {
  category: FOOD,
  name: "Water (1 Gal)",
  type: "-",
  barter: "1",
  bulk: "1",
  break: "1",
};

// #region Food loot tables
export const CIVILIAN_FOOD = [
  { item: CANNED_GOODS, weighting: 3 },
  { item: CANNED_GOODS_EXPIRED, weighting: 3 },
  { item: RATION_BAR, weighting: 3 },
  { item: RATION_DAY, weighting: 3 },
  { item: SOFT_DRINK, weighting: 3 },
  { item: WATER, weighting: 3 },
  { item: VITAMINS, weighting: 3 },
];
export const GROCERY_FOOD = [
  { item: CANNED_GOODS, weighting: 3 },
  { item: CANNED_GOODS_EXPIRED, weighting: 3 },
  { item: SOFT_DRINK, weighting: 3 },
  { item: WATER, weighting: 3 },
  { item: VITAMINS, weighting: 3 },
];
export const LIQUOR_FOOD = [
  { item: BEER, weighting: 3 },
  { item: LIQUOR, weighting: 3 },
  { item: SOFT_DRINK, weighting: 3 },
];
export const OUTDOOR_FOOD = [
  { item: RATION_BAR, weighting: 3 },
  { item: RATION_DAY, weighting: 3 },
  { item: SOFT_DRINK, weighting: 3 },
  { item: WATER, weighting: 3 },
  { item: WATER_PURIFICATION_TABLETS, weighting: 3 },
];
// #endregion

import { MEDICINE } from "./itemCategories";

export const ASPIRIN = {
  category: MEDICINE,
  name: "Aspirin (bottle)",
  type: "medicine",
  barter: "2",
  bulk: "L",
  break: "2",
};
export const BANDAGES = {
  category: MEDICINE,
  name: "Bandages",
  type: "cloth",
  barter: "1",
  bulk: "L",
  break: "1",
};
export const COLD_PACK = {
  category: MEDICINE,
  name: "Cold Pack",
  type: "medicine",
  barter: "2",
  bulk: "L",
  break: "1",
};
export const FIRST_AID_KIT = {
  category: MEDICINE,
  name: "First Aid Kit",
  type: "medicine",
  barter: "3",
  bulk: "L",
  break: "2",
};
export const SEDATIVE = {
  category: MEDICINE,
  name: "Sedative",
  type: "medicine",
  barter: "5",
  bulk: "L",
  break: "C",
};
export const SPLINT = {
  category: MEDICINE,
  name: "Splint",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "2",
};
export const SURGICAL_KIT = {
  category: MEDICINE,
  name: "Surgical Kit",
  type: "tool",
  barter: "8",
  bulk: "L",
  break: "4",
};
export const VITAMINS = {
  category: MEDICINE,
  name: "Vitamins (bottle)",
  type: "medicine",
  barter: "3",
  bulk: "L",
  break: "1",
};
export const WATER_PURIFICATION_TABLETS = {
  category: MEDICINE,
  name: "Water Purification Tablets",
  type: "medicine",
  barter: "2",
  bulk: "L",
  break: "1",
};
export const ZNOC = {
  category: MEDICINE,
  name: "Z-Noc (1 dose)",
  type: "medicine",
  barter: "6",
  bulk: "L",
  break: "C",
};

// #region Medicine loot tables
export const CIVILIAN_MEDICINE = [
  { item: ASPIRIN, weighting: 3 },
  { item: BANDAGES, weighting: 3 },
  { item: COLD_PACK, weighting: 3 },
  { item: FIRST_AID_KIT, weighting: 3 },
  { item: SPLINT, weighting: 3 },
  { item: VITAMINS, weighting: 3 },
  { item: WATER_PURIFICATION_TABLETS, weighting: 3 },
];
export const MILITARY_MEDICINE = [
  { item: ASPIRIN, weighting: 3 },
  { item: BANDAGES, weighting: 3 },
  { item: COLD_PACK, weighting: 3 },
  { item: FIRST_AID_KIT, weighting: 3 },
  { item: SEDATIVE, weighting: 3 },
  { item: SPLINT, weighting: 3 },
  { item: SURGICAL_KIT, weighting: 3 },
  { item: VITAMINS, weighting: 3 },
  { item: WATER_PURIFICATION_TABLETS, weighting: 3 },
  { item: ZNOC, weighting: 3 },
];
export const ADVANCED_MEDICINE = [
  { item: ASPIRIN, weighting: 3 },
  { item: BANDAGES, weighting: 3 },
  { item: COLD_PACK, weighting: 3 },
  { item: FIRST_AID_KIT, weighting: 3 },
  { item: SEDATIVE, weighting: 3 },
  { item: SPLINT, weighting: 3 },
  { item: SURGICAL_KIT, weighting: 3 },
];
// #endregion

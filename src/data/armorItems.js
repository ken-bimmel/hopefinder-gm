import { HARDHAT, MILITARY_HELMET } from "./gearItems";
import { ARMOR } from "./itemCategories";

export const BIKER_GEAR = {
  category: ARMOR,
  name: "Biker Gear",
  type: "Leather",
  barter: "3",
  ac: "-",
  traits: "Helmet",
  speed: "-",
  resist: "3 B/P/S",
  bulk: 1,
  break: "10",
};
export const BULLET_PROOF_VEST = {
  category: ARMOR,
  name: "Bullet Proof Vest",
  type: "Synthetic",
  barter: "6",
  ac: "+1",
  traits: "-",
  speed: "-",
  resist: "5 B/P/S",
  bulk: "L",
  break: "10",
};
export const CLOTHES_BASIC = {
  category: ARMOR,
  name: "Clothes, Basic",
  type: "Cloth",
  barter: "0",
  ac: "-",
  traits: "-",
  speed: "-",
  resist: "1 S",
  bulk: "L",
  break: "6",
};
export const CLOTHES_FANCY = {
  category: ARMOR,
  name: "Clothes, Fancy",
  type: "Cloth",
  barter: "4",
  ac: "-",
  traits: "-",
  speed: "-",
  resist: "1 S",
  bulk: "L",
  break: "6",
};
export const CLOTHES_WINTER = {
  category: ARMOR,
  name: "Clothes, Winter",
  type: "Cloth",
  barter: "0",
  ac: "-1",
  traits: "Warm",
  speed: "-",
  resist: "2 B/P/S",
  bulk: 1,
  break: "8",
};
export const FIREFIGHTER_GEAR = {
  category: ARMOR,
  name: "Firefighter Gear",
  type: "Synthetic",
  barter: "4",
  ac: "-1",
  traits: "Hazardous, Helmet",
  speed: "-5 ft.",
  resist: "4 All",
  bulk: 2,
  break: "10",
};
export const LAB_GEAR = {
  category: ARMOR,
  name: "Lab Gear",
  type: "Synthetic",
  barter: "2",
  ac: "-1",
  traits: "Hazardous",
  speed: "-",
  resist: "2 All",
  bulk: "L",
  break: "6",
};
export const LEATHER_ARMOR = {
  category: ARMOR,
  name: "Leather Armor",
  type: "Leather",
  barter: "5",
  ac: "+1",
  traits: "Warm",
  speed: "-",
  resist: "4 B/P/S",
  bulk: "L",
  break: "12",
};
export const LIGHT_PATCHWORK = {
  category: ARMOR,
  name: "Light Patchwork",
  type: "Patchwork",
  barter: "4",
  ac: "+1",
  traits: "-",
  speed: "-5 ft.",
  resist: "3 All",
  bulk: 1,
  break: "10",
};
export const WORKWEAR = {
  category: ARMOR,
  name: "Workwear",
  type: "Leather",
  barter: "1",
  ac: "-",
  traits: "-",
  speed: "-",
  resist: "2 B/P/S",
  bulk: "L",
  break: "10",
};
export const HAZMAT_SUIT = {
  category: ARMOR,
  name: "Hazmat Suit",
  type: "Synthetic",
  barter: "7",
  ac: "-1",
  traits: "Sealed, Warm",
  speed: "-5 ft.",
  resist: "6 All",
  bulk: 1,
  break: "8",
};
export const HEAVY_PATCHWORK = {
  category: ARMOR,
  name: "Heavy Patchwork",
  type: "Patchwork",
  barter: "6",
  ac: "+1",
  traits: "-",
  speed: "-5 ft.",
  resist: "5 All",
  bulk: 2,
  break: "12",
};
export const INFANTRY_ARMOR = {
  category: ARMOR,
  name: "Infantry Armor",
  type: "Synthetic",
  barter: "14",
  ac: "+2",
  traits: "Hazardous, Helmet",
  speed: "-",
  resist: "8 All",
  bulk: 1,
  break: "18",
};
export const IRON_ARMOR = {
  category: ARMOR,
  name: "Iron Armor",
  type: "Patchwork",
  barter: "8",
  ac: "+1",
  traits: "-",
  speed: "-5 ft.",
  resist: "7 All",
  bulk: 2,
  break: "14",
};
export const POLICE_BODY_ARMOR = {
  category: ARMOR,
  name: "Police Body Armor",
  type: "Synthetic",
  barter: "10",
  ac: "+2",
  traits: "Helmet",
  speed: "-5 ft.",
  resist: "7 All",
  bulk: 1,
  break: "16",
};
export const SPORTS_PROTECTION = {
  category: ARMOR,
  name: "Sports Protection",
  type: "Synthetic",
  barter: "7",
  ac: "+1",
  traits: "Helmet",
  speed: "-",
  resist: "5 All",
  bulk: 1,
  break: "12",
};
export const ZDAY_ARMOR = {
  category: ARMOR,
  name: "Z-Day Armor",
  type: "Synthetic",
  barter: "20",
  ac: "+3",
  traits: "Helmet, Sealed",
  speed: "-5 ft.",
  resist: "12 All",
  bulk: 2,
  break: "20",
};
export const IMPROVISED_SHIELD = {
  category: ARMOR,
  name: "Improvised Shield",
  type: "Patchwork",
  barter: "0",
  ac: "-",
  traits: "Cover, 1 Hand",
  speed: "-",
  resist: "4 All",
  bulk: 1,
  break: "4",
};
export const RIOT_SHIELD = {
  category: ARMOR,
  name: "Riot Shield",
  type: "Synthetic",
  barter: "4",
  ac: "-",
  traits: "Cover, 1 Hand",
  speed: "-",
  resist: "8 All",
  bulk: 1,
  break: "8",
};

// #region Armor loot tables
export const IMPROVISED_ARMOR = [
  { item: SPORTS_PROTECTION, weighting: 3 },
  { item: IMPROVISED_SHIELD, weighting: 3 },
];
export const CIVILIAN_ARMOR = [
  { item: BIKER_GEAR, weighting: 3 },
  { item: CLOTHES_BASIC, weighting: 3 },
  { item: CLOTHES_FANCY, weighting: 3 },
  { item: CLOTHES_WINTER, weighting: 3 },
  { item: WORKWEAR, weighting: 3 },
  { item: SPORTS_PROTECTION, weighting: 3 },
  { item: HARDHAT, weighting: 3 },
];
export const POLICE_ARMOR = [
  { item: BULLET_PROOF_VEST, weighting: 3 },
  { item: FIREFIGHTER_GEAR, weighting: 3 },
  { item: HAZMAT_SUIT, weighting: 3 },
  { item: POLICE_BODY_ARMOR, weighting: 3 },
  { item: RIOT_SHIELD, weighting: 3 },
  { item: MILITARY_HELMET, weighting: 3 },
];
export const MILITARY_ARMOR = [
  { item: BULLET_PROOF_VEST, weighting: 3 },
  { item: HAZMAT_SUIT, weighting: 3 },
  { item: INFANTRY_ARMOR, weighting: 3 },
  { item: ZDAY_ARMOR, weighting: 3 },
  { item: RIOT_SHIELD, weighting: 3 },
  { item: MILITARY_HELMET, weighting: 3 },
];
export const EXOTIC_ARMOR = [
  { item: LAB_GEAR, weighting: 3 },
  { item: HAZMAT_SUIT, weighting: 3 },
  { item: ZDAY_ARMOR, weighting: 3 },
];
export const CRAFTED_ARMOR = [
  { item: LEATHER_ARMOR, weighting: 3 },
  { item: LIGHT_PATCHWORK, weighting: 3 },
  { item: HEAVY_PATCHWORK, weighting: 3 },
  { item: IRON_ARMOR, weighting: 3 },
];
// #endregion

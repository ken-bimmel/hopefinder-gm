import { AMMO } from "./itemCategories";

export const ARROWS_10 = {
  category: AMMO,
  name: "Arrows/Bolts (10)",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "1",
};
export const BULLETS_PISTOL_10 = {
  category: AMMO,
  name: "Bullets, Pistol (10) ",
  type: "bullet",
  barter: "1",
  bulk: "L",
  break: "1",
};
export const BULLETS_RIFLE_10 = {
  category: AMMO,
  name: "Bullets, Rifle or Shotgun (10) ",
  type: "bullet",
  barter: "2",
  bulk: "L",
  break: "1",
};
export const PIERCING_BULLETS_PISTOL_5 = {
  category: AMMO,
  name: "Piercing Bullets, Pistol (5) ",
  type: "bullet",
  barter: "2",
  bulk: "L",
  break: "2",
};
export const PIERCING_BULLETS_RIFLE_OR_SHOTGUN_5 = {
  category: AMMO,
  name: "Piercing Bullets, Rifle or Shotgun (5) ",
  type: "bullet",
  barter: "3",
  bulk: "L",
  break: "2",
};
export const ZROUND_BULLETS_PISTOL_1 = {
  category: AMMO,
  name: "Z-Round Bullets, Pistol (1) ",
  type: "bullet",
  barter: " 4",
  bulk: "-",
  break: "4",
};
export const ZROUND_BULLETS_RIFLE_1 = {
  category: AMMO,
  name: "Z-Round Bullets, Rifle (1) ",
  type: "bullet",
  barter: "5",
  bulk: "-",
  break: "4",
};

// #region Ammo loot tables
export const CIVILIAN_AMMO = [
  { item: ARROWS_10, weighting: 3 },
  { item: BULLETS_PISTOL_10, weighting: 3 },
  { item: BULLETS_RIFLE_10, weighting: 3 },
];
export const POLICE_AMMO = [
  { item: BULLETS_PISTOL_10, weighting: 3 },
  { item: BULLETS_RIFLE_10, weighting: 3 },
  { item: PIERCING_BULLETS_PISTOL_5, weighting: 3 },
  { item: PIERCING_BULLETS_RIFLE_OR_SHOTGUN_5, weighting: 3 },
];
export const MILITARY_AMMO = [
  { item: PIERCING_BULLETS_PISTOL_5, weighting: 3 },
  { item: PIERCING_BULLETS_RIFLE_OR_SHOTGUN_5, weighting: 3 },
  { item: ZROUND_BULLETS_PISTOL_1, weighting: 3 },
  { item: ZROUND_BULLETS_RIFLE_1, weighting: 3 },
];
export const EXOTIC_AMMO = [
  { item: ZROUND_BULLETS_PISTOL_1, weighting: 3 },
  { item: ZROUND_BULLETS_RIFLE_1, weighting: 3 },
];
// #endregion

import { WEAPON, ARMOR, GEAR_CATEGORIES } from "../data/lootTables";

function filterToArmorItems(items) {
  return items.filter((item) => item.category === ARMOR);
}

function filterToWeaponItems(items) {
  return items.filter((item) => item.category === WEAPON);
}

function filterToGearItems(items) {
  return items.filter((item) => GEAR_CATEGORIES.includes(item.category));
}

export { filterToArmorItems, filterToWeaponItems, filterToGearItems };

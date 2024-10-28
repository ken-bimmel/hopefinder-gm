import { ARMOR, GEAR_CATEGORIES, WEAPON } from "../data/itemCategories";

function filterToArmorItems(items) {
  return items?.filter((item) => item.category === ARMOR);
}

function filterToWeaponItems(items) {
  return items?.filter((item) => item.category === WEAPON);
}

function filterToGearItems(items) {
  return items?.filter((item) => GEAR_CATEGORIES.includes(item.category));
}

export { filterToArmorItems, filterToWeaponItems, filterToGearItems };

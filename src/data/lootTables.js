// Item area keys
const HARDWARE_STORE = "Hardware Store";
const BIG_BOX = "Big Box";
const GAS_STATION = "Gas Station/Convenience Store";
const SUPERMARKET = "Supermarket";
const DEPARTMENT_STORE = "Department Store";
const OUTDOORS_STORE = "Outdoors Store";
const SPORTS_STORE = "Sports Store";
const MEMBERS_CLUB = "Members Club";
const CLOTHING_STORE = "Clothing Store";
const OFFICE_SUPPLY = "Office Supply";
const PET_STORE = "Pet Store";
const CRAFT_STORE = "Craft Store";
const ELECTRONICS_STORE = "Electronics Store";
const RESTAURANT = "Restaurant";
const AUTO_PARTS = "Auto Parts Store";
const FURNITURE_STORE = "Furniture Store";
const GUN_STORE = "Gun Store";
const NOVELTY_STORE = "Novelty Store";
const BOOK_STORE = "Book Store";
const PHARMACY = "Pharmacy";
const BAR = "Bar";
const DENTIST_OFFICE = "Dentist Office";
const DOCTORS_OFFICE = "Doctor's Office";
const HOSPITAL = "Hospital";
const POLICE_STATION = "Police Station";
const FIRE_STATION = "Fire Station";
const ANIMAL_CONTROL = "Animal Control";
const NATIONAL_GUARD = "National Guard Depot";
const SCHOOL = "School";
const SELF_STORAGE = "Self-Storage";
const MUSIC_STORE = "Music Store";
const LABORATORY = "Laboratory";
const EQUIPMENT_RENTAL = "Equipment Rental";
const AIRPORT = "Airport";
const MUNICIPAL_BUILDING = "Municipal Building";
const GARDEN_STORE = "Garden Store";
const BANK = "Bank";
const MUSEUM = "Museum";
const BARN = "Barn";
const RURAL_HOUSE = "House (Rural)";
const SUBURBAN_HOUSE = "House (Suburban)";
const URBAN_HOUSE = "House (Urban)";
const APARTMENT = "Apartment";
const DOCK = "Dock";
const TRAIN_STATION = "Train Station";

// Item Categories
const ARMOR = "Armor";
const WEAPON = "Weapon";
const FOOD = "Food";
const AMMO = "Ammo";
const MEDICINE = "Medicine";
const GEAR = "Gear";

// Items
const BIKER_GEAR = {
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
const BULLET_PROOF_VEST = {
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
const CLOTHES_BASIC = {
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
const CLOTHES_FANCY = {
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
const CLOTHES_WINTER = {
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
const FIREFIGHTER_GEAR = {
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
const LAB_GEAR = {
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
const LEATHER_ARMOR = {
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
const LIGHT_PATCHWORK = {
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
const WORKWEAR = {
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
const HAZMAT_SUIT = {
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
const HEAVY_PATCHWORK = {
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
const INFANTRY_ARMOR = {
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
const IRON_ARMOR = {
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
const POLICE_BODY_ARMOR = {
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
const SPORTS_PROTECTION = {
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
const ZDAY_ARMOR = {
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
const IMPROVISED_SHIELD = {
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
const RIOT_SHIELD = {
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
const BASEBALL_BAT = {
  category: WEAPON,
  name: "Baseball Bat",
  type: "club",
  barter: "2",
  damage: "1d6 B",
  traits: "2 Hand 1d8",
  hands: "1",
  range: "-",
  reload: "-",
  bulk: "1",
  break: "4",
};
const BRANCH = {
  category: WEAPON,
  name: "Branch",
  type: "-",
  barter: "0",
  damage: "1d6 B",
  traits: "-",
  hands: "1",
  range: "-",
  reload: "-",
  bulk: "1",
  break: "2",
};
const BRASS_KNUCKLES = {
  category: WEAPON,
  name: "Brass Knuckles",
  type: "tool",
  barter: "1",
  damage: "1d4 B",
  traits: "Finesse",
  hands: "1",
  range: "-",
  reload: "-",
  bulk: "L",
  break: "4",
};
const BRICK = {
  category: WEAPON,
  name: "Brick",
  type: "-",
  barter: "0",
  damage: "1d4 B",
  traits: "-",
  hands: "1",
  range: "10 ft.",
  reload: "-",
  bulk: "1",
  break: "1",
};
const CRAFTED_SPEAR = {
  category: WEAPON,
  name: "Crafted Spear",
  type: "blade",
  barter: "2",
  damage: "1d6 P",
  traits: "2 Hand 1d8",
  hands: "1",
  range: "20 ft.",
  reload: "-",
  bulk: "1",
  break: "4",
};
const CRUDE_SPEAR = {
  category: WEAPON,
  name: "Crude Spear",
  type: "patchwork",
  barter: "1",
  damage: "1d4 P",
  traits: "2 Hand 1d6",
  hands: "1",
  range: "10 ft.",
  reload: "-",
  bulk: "1",
  break: "1",
};
// Hopefully aren't looting these
// const FIST = {
//   category: WEAPON,
//   name: "Fist",
//   type: "-",
//   barter: "-",
//   damage: "Nonlethal",
//   traits: "Finesse",
//   hands: "1",
//   range: "-",
//   reload: "-",
//   bulk: "-",
//   break: "-",
// };
const GARDEN_SHEARS = {
  category: WEAPON,
  name: "Garden Shears",
  type: "blade",
  barter: "1",
  damage: "1d6 S",
  traits: "Tool",
  hands: "2",
  range: "-",
  reload: "-",
  bulk: "1",
  break: "2",
};
const GOLF_CLUB = {
  category: WEAPON,
  name: "Golf Club",
  type: "club",
  barter: "1",
  damage: "1d6 B",
  traits: "-",
  hands: "2",
  range: "-",
  reload: "-",
  bulk: "1",
  break: "4",
};
const HAND_AXE = {
  category: WEAPON,
  name: "Hand Axe",
  type: "axe",
  barter: "2",
  damage: "1d6 S",
  traits: "tool",
  hands: "1",
  range: "10 ft.",
  reload: "-",
  bulk: "L",
  break: "4",
};
const KITCHEN_KNIFE = {
  category: WEAPON,
  name: "Kitchen Knife",
  type: "blade",
  barter: "1",
  damage: "1d4 S",
  traits: "Finesse",
  hands: "1",
  range: "10 ft.",
  reload: "-",
  bulk: "L",
  break: "2",
};
const POCKET_KNIFE = {
  category: WEAPON,
  name: "Pocket Knife",
  type: "blade",
  barter: "1",
  damage: "1 S",
  traits: "Finesse, Tool",
  hands: "1",
  range: "-",
  reload: "-",
  bulk: "L",
  break: "1",
};
const SCREWDRIVER = {
  category: WEAPON,
  name: "Screwdriver",
  type: "tool",
  barter: "1",
  damage: "1 P",
  traits: "Tool",
  hands: "1",
  range: "-",
  reload: "-",
  bulk: "L",
  break: "2",
};
const SHIV = {
  category: WEAPON,
  name: "Shiv",
  type: "patchwork",
  barter: "0",
  damage: "1d4 P",
  traits: "-",
  hands: "1",
  range: "-",
  reload: "-",
  bulk: "L",
  break: "C",
};
const TOOL_HEAVY = {
  category: WEAPON,
  name: "Tool, Heavy",
  type: "tool",
  barter: "1",
  damage: "1d6 B",
  traits: "Tool",
  hands: "1",
  range: "-",
  reload: "-",
  bulk: "1",
  break: "4",
};
const CHAINSAW = {
  category: WEAPON,
  name: "Chainsaw",
  type: "tool",
  barter: "8",
  damage: "2d8 S",
  traits: "Fuel, Deadly",
  hands: "2",
  range: "-",
  reload: "-",
  bulk: "2",
  break: "4",
};
const COMBAT_KNIFE = {
  category: WEAPON,
  name: "Combat Knife",
  type: "blade",
  barter: "2",
  damage: "1d6 S",
  traits: "Finesse",
  hands: "1",
  range: " 10 ft.",
  reload: "-",
  bulk: "L",
  break: "4",
};
const CRUDE_SWORD = {
  category: WEAPON,
  name: "Crude Sword",
  type: "patchwork",
  barter: "1",
  damage: "1d8 S",
  traits: "-",
  hands: "2",
  range: "-",
  reload: "-",
  bulk: "1",
  break: "1",
};
const FIRE_AXE = {
  category: WEAPON,
  name: "Fire Axe",
  type: "axe",
  barter: "3",
  damage: "1d8 S",
  traits: "Tool",
  hands: "2",
  range: "-",
  reload: "-",
  bulk: "1",
  break: "4",
};
const KATANA = {
  category: WEAPON,
  name: "Katana",
  type: "blade",
  barter: "5",
  damage: "1d10 S",
  traits: "Deadly",
  hands: "2",
  range: "-",
  reload: "-",
  bulk: "1",
  break: "6",
};
const MACHETE = {
  category: WEAPON,
  name: "Machete",
  type: "blade",
  barter: "3",
  damage: "1d8 S",
  traits: "Deadly",
  hands: "1",
  range: "-",
  reload: "-",
  bulk: "1",
  break: "4",
};
const SLEDGEHAMMER = {
  category: WEAPON,
  name: "Sledgehammer",
  type: "club",
  barter: "5",
  damage: "2d6 B",
  traits: "Tool",
  hands: "2",
  range: "-",
  reload: "-",
  bulk: "2",
  break: "6",
};
const BOTTLE = {
  category: WEAPON,
  name: "Bottle",
  type: "-",
  barter: "0",
  damage: "1d4 S",
  traits: "-",
  hands: "1",
  range: "20 ft.",
  reload: "-",
  bulk: "L",
  break: "C",
};
const CRAFTED_BOW = {
  category: WEAPON,
  name: "Crafted Bow",
  type: "bow",
  barter: "3",
  damage: "1d8 P",
  traits: "Str +2",
  hands: "2",
  range: "40 ft.",
  reload: "0",
  bulk: "1",
  break: "4",
};
const CRUDE_BOW = {
  category: WEAPON,
  name: "Crude Bow",
  type: "bow",
  barter: "2",
  damage: "1d6 P",
  traits: "Str +0",
  hands: "2",
  range: "30 ft.",
  reload: "0",
  bulk: "1",
  break: "2",
};
const CRUDE_PISTOL = {
  category: WEAPON,
  name: "Crude Pistol",
  type: "pistol",
  barter: "2",
  damage: "1d6 P",
  traits: "Clip 1, Deadly",
  hands: "1",
  range: "10 ft.",
  reload: "2",
  bulk: "L",
  break: "2",
};
const CRUDE_RIFLE = {
  category: WEAPON,
  name: "Crude Rifle",
  type: "rifle",
  barter: "3",
  damage: "1d8 P",
  traits: "Clip 1, Deadly",
  hands: "2",
  range: "20 ft.",
  reload: "2",
  bulk: "1",
  break: "2",
};
const DBL_BARREL_SHOTGUN = {
  category: WEAPON,
  name: "Dbl. Barrel Shotgun",
  type: "shotgun",
  barter: "4",
  damage: "2d6 P",
  traits: "Clip 2, Deadly",
  hands: "2",
  range: "30 ft.",
  reload: "2",
  bulk: "1",
  break: "4",
};
const HUNTING_RIFLE = {
  category: WEAPON,
  name: "Hunting Rifle",
  type: "rifle",
  barter: "4",
  damage: "1d10 P",
  traits: "Clip 5, Deadly",
  hands: "2",
  range: "50 ft.",
  reload: "2",
  bulk: "1",
  break: "4",
};
const MOLOTOV_COCKTAIL = {
  category: WEAPON,
  name: "Molotov Cocktail",
  type: " Fuel",
  barter: " 2",
  damage: " 2d6 fire",
  traits: "Splash 1d6 fire",
  hands: "1",
  range: "20 ft.",
  reload: "-",
  bulk: "L",
  break: "C",
};
const POCKET_PISTOL = {
  category: WEAPON,
  name: "Pocket Pistol",
  type: "pistol",
  barter: "3",
  damage: "1d6 P",
  traits: "Clip 5, Deadly",
  hands: "1",
  range: "20 ft.",
  reload: "2",
  bulk: "L",
  break: "4",
};
const REVOLVER = {
  category: WEAPON,
  name: "Revolver",
  type: "pistol",
  barter: "4",
  damage: "1d10 P",
  traits: "Clip 6, Deadly",
  hands: "1",
  range: "30 ft.",
  reload: "3",
  bulk: "L",
  break: "4",
};
const FRAG_GRENADE = {
  category: WEAPON,
  name: "Frag Grenade",
  type: "grenade",
  barter: "4",
  damage: "4d6 S",
  traits: "Splash 2d6 S",
  hands: "1",
  range: "20 ft.",
  reload: "-",
  bulk: "L",
  break: "C",
};
const INCENDIARY_GRENADE = {
  category: WEAPON,
  name: "Incendiary Grenade",
  type: "grenade",
  barter: "6",
  damage: "4d6 Fire",
  traits: "Splash 2d6 fire",
  hands: "1",
  range: "20 ft.",
  reload: "-",
  bulk: "L",
  break: "C",
};
const TEAR_GAS_GRENADE = {
  category: WEAPON,
  name: "Tear Gas Grenade",
  type: "grenade",
  barter: "3",
  damage: "Gas",
  traits: "Splash gas",
  hands: "1",
  range: "20 ft,",
  reload: "-",
  bulk: "L",
  break: "C",
};
const COMPOUND_BOW = {
  category: WEAPON,
  name: "Compound Bow",
  type: "bow",
  barter: "4",
  damage: "1d8 P",
  traits: "Str +4",
  hands: "2",
  range: "60 ft.",
  reload: "0",
  bulk: "1",
  break: "6",
};
const CROSSBOW = {
  category: WEAPON,
  name: "Crossbow",
  type: "bow",
  barter: "4",
  damage: "1d8 P",
  traits: "Deadly",
  hands: "2",
  range: "60 ft.",
  reload: "1",
  bulk: "1",
  break: "4",
};
const HAND_CANNON = {
  category: WEAPON,
  name: "Hand Cannon",
  type: "pistol",
  barter: "8",
  damage: "1d12 P",
  traits: "Clip 6, Deadly",
  hands: "1",
  range: "30 ft.",
  reload: "3",
  bulk: "1",
  break: "4",
};
const HEAVY_MACHINEGUN = {
  category: WEAPON,
  name: "Heavy Machinegun",
  type: "rifle",
  barter: "12",
  damage: "2d8 P",
  traits: "Burst, Clip 30, Deadly",
  hands: "2",
  range: "30 ft.",
  reload: "2",
  bulk: "2",
  break: "6",
};
const LIGHT_MACHINEGUN = {
  category: WEAPON,
  name: "Light Machinegun",
  type: "rifle",
  barter: "8",
  damage: "1d8 P",
  traits: "Burst, Clip 30, Deadly",
  hands: "1",
  range: "20 ft.",
  reload: "2",
  bulk: "1",
  break: "4",
};
const MILITARY_MACHINEGUN = {
  category: WEAPON,
  name: "Military Machinegun",
  type: "rifle",
  barter: "18",
  damage: "4d8 P",
  traits: "Burst, Clip 60, Deadly",
  hands: "2",
  range: "30 ft.",
  reload: "4",
  bulk: "3",
  break: "6",
};
const PUMP_SHOTGUN = {
  category: WEAPON,
  name: "Pump Shotgun",
  type: "shotgun",
  barter: "5",
  damage: "2d6 P",
  traits: "Clip 5, Deadly",
  hands: "2",
  range: "30 ft.",
  reload: "3",
  bulk: "1",
  break: "4",
};
const SEMIAUTO_PISTOL = {
  category: WEAPON,
  name: "Semiauto Pistol",
  type: "pistol",
  barter: "6",
  damage: "1d8 P",
  traits: "Burst, Clip 12, Deadly",
  hands: "1",
  range: "30 ft.",
  reload: "1",
  bulk: "L",
  break: "4",
};
const SEMIAUTO_SHOTGUN = {
  category: WEAPON,
  name: "Semiauto Shotgun",
  type: "shotgun",
  barter: "8",
  damage: "2d8 P",
  traits: "Burst, Clip 20, Deadly",
  hands: "2",
  range: "30 ft.",
  reload: "2",
  bulk: "1",
  break: "6",
};
const SNIPER_RIFLE = {
  category: WEAPON,
  name: "Sniper Rifle",
  type: "rifle",
  barter: "10",
  damage: "2d10 P",
  traits: "Clip 10, Deadly",
  hands: "2",
  range: "100 ft.",
  reload: "2",
  bulk: "2",
  break: "4",
};
const ARROWS_10 = {
  category: AMMO,
  name: "Arrows/Bolts (10)",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "1",
};
const BULLETS_PISTOL_10 = {
  category: AMMO,
  name: "Bullets, Pistol (10) ",
  type: "bullet",
  barter: "1",
  bulk: "L",
  break: "1",
};
const BULLETS_RIFLE_10 = {
  category: AMMO,
  name: "Bullets, Rifle or Shotgun (10) ",
  type: "bullet",
  barter: "2",
  bulk: "L",
  break: "1",
};
const PIERCING_BULLETS_PISTOL_5 = {
  category: AMMO,
  name: "Piercing Bullets, Pistol (5) ",
  type: "bullet",
  barter: "2",
  bulk: "L",
  break: "2",
};
const PIERCING_BULLETS_RIFLE_OR_SHOTGUN_5 = {
  category: AMMO,
  name: "Piercing Bullets, Rifle or Shotgun (5) ",
  type: "bullet",
  barter: "3",
  bulk: "L",
  break: "2",
};
const ZROUND_BULLETS_PISTOL_1 = {
  category: AMMO,
  name: "Z-Round Bullets, Pistol (1) ",
  type: "bullet",
  barter: " 4",
  bulk: "-",
  break: "4",
};
const ZROUND_BULLETS_RIFLE_1 = {
  category: AMMO,
  name: "Z-Round Bullets, Rifle (1) ",
  type: "bullet",
  barter: "5",
  bulk: "-",
  break: "4",
};
const BEER = {
  category: FOOD,
  name: "Beer",
  type: "-",
  barter: "3",
  bulk: "L",
  break: "1",
};
const CANNED_GOODS = {
  category: FOOD,
  name: "Canned Goods",
  type: "-",
  barter: "2",
  bulk: "L",
  break: "1",
};
const CANNED_GOODS_EXPIRED = {
  category: FOOD,
  name: "Canned Goods, Expired",
  type: "-",
  barter: "1",
  bulk: "L",
  break: "1",
};
const LIQUOR = {
  category: FOOD,
  name: "Liquor",
  type: "-",
  barter: "4",
  bulk: "L",
  break: "1",
};
const MEAT_FRESH = {
  category: FOOD,
  name: "Meat, Fresh",
  type: "-",
  barter: "2",
  bulk: "L",
  break: "1",
};
const RATION_BAR = {
  category: FOOD,
  name: "Ration, Bar",
  type: "-",
  barter: "1",
  bulk: "L",
  break: "1",
};
const RATION_DAY = {
  category: FOOD,
  name: "Ration, Day",
  type: "-",
  barter: "3",
  bulk: "L",
  break: "1",
};
const SOFT_DRINK = {
  category: FOOD,
  name: "Soft Drink",
  type: "-",
  barter: "2",
  bulk: "L",
  break: "1",
};
const VEGETABLES_FRESH = {
  category: FOOD,
  name: "Vegetables, Fresh",
  type: "-",
  barter: "1",
  bulk: "L",
  break: "1",
};
const WATER = {
  category: FOOD,
  name: "Water (1 Gal)",
  type: "-",
  barter: "1",
  bulk: "1",
  break: "1",
};
const ASPIRIN = {
  category: MEDICINE,
  name: "Aspirin (bottle) ",
  type: "medicine",
  barter: "2",
  bulk: "L",
  break: "2",
};
const BANDAGES = {
  category: MEDICINE,
  name: "Bandages ",
  type: "cloth",
  barter: "1",
  bulk: "L",
  break: "1",
};
const COLD_PACK = {
  category: MEDICINE,
  name: "Cold Pack ",
  type: "medicine",
  barter: "2",
  bulk: "L",
  break: "1",
};
const FIRST_AID_KIT = {
  category: MEDICINE,
  name: "First Aid Kit ",
  type: "medicine",
  barter: "3",
  bulk: "L",
  break: "2",
};
const SEDATIVE = {
  category: MEDICINE,
  name: "Sedative ",
  type: "medicine",
  barter: "5",
  bulk: "L",
  break: "C",
};
const SPLINT = {
  category: MEDICINE,
  name: "Splint",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "2",
};
const SURGICAL_KIT = {
  category: MEDICINE,
  name: "Surgical Kit",
  type: "tool",
  barter: "8",
  bulk: "L",
  break: "4",
};
const VITAMINS = {
  category: MEDICINE,
  name: "Vitamins (bottle) ",
  type: "medicine",
  barter: "3",
  bulk: "L",
  break: "1",
};
const WATER_PURIFICATION_TABLETS = {
  category: MEDICINE,
  name: "Water Purification Tablets ",
  type: "medicine",
  barter: "2",
  bulk: "L",
  break: "1",
};
const ZNOC = {
  category: MEDICINE,
  name: "Z-Noc (1 dose) ",
  type: "medicine",
  barter: "6",
  bulk: "L",
  break: "C",
};
const AUTOMOTIVE_KIT = {
  category: GEAR,
  name: "Automotive Kit",
  type: "tool",
  barter: "4",
  bulk: "4",
  break: "4",
};
const BEDROLL = {
  category: GEAR,
  name: "Bedroll ",
  type: "cloth",
  barter: "2",
  bulk: "1",
  break: "2",
};
const BATTERY_SMALL = {
  category: GEAR,
  name: "Battery (small) ",
  type: "power",
  barter: "1",
  bulk: "L",
  break: "1",
};
const BATTERY_LARGE = {
  category: GEAR,
  name: "Battery (large) ",
  type: "power",
  barter: "4",
  bulk: "1",
  break: "2",
};
const CANTEEN = {
  category: GEAR,
  name: "Canteen",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "2",
};
const CLIMBING_KIT = {
  category: GEAR,
  name: "Climbing Kit",
  type: "tool",
  barter: "2",
  bulk: "1",
  break: "4",
};
const COMPASS = {
  category: GEAR,
  name: "Compass",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "1",
};
const CROWBAR = {
  category: GEAR,
  name: "Crowbar",
  type: "tool",
  barter: "1",
  bulk: "1",
  break: "4",
};
const DUCT_TAPE = {
  category: GEAR,
  name: "Duct Tape",
  type: "tool",
  barter: "2",
  bulk: "L",
  break: "1",
};
const FLASHLIGHT = {
  category: GEAR,
  name: "Flashlight",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "1",
};
const GASOLINE = {
  category: GEAR,
  name: "Gasoline (1 Gallon)",
  type: " Fuel",
  barter: "1",
  bulk: "1",
  break: "1",
};
const GENERATOR = {
  category: GEAR,
  name: "Generator ",
  type: "electronic",
  barter: "14",
  bulk: "6",
  break: "8",
};
const HAMMER = {
  category: GEAR,
  name: "Hammer*",
  type: "tool",
  barter: "1",
  bulk: "1",
  break: "4",
};
const HEADLIGHT = {
  category: GEAR,
  name: "Headlight",
  type: "tool",
  barter: "2",
  bulk: "L",
  break: "1",
};
const LAPTOP = {
  category: GEAR,
  name: "Laptop ",
  type: "electronic",
  barter: "10",
  bulk: "1",
  break: "4",
};
const LIGHTER = {
  category: GEAR,
  name: "Lighter",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "1",
};
const LOCKPICKS = {
  category: GEAR,
  name: "Lockpicks",
  type: "tool",
  barter: "3",
  bulk: "L",
  break: "2",
};
const MACHINERY_KIT = {
  category: GEAR,
  name: "Machinery Kit",
  type: "tool",
  barter: "3",
  bulk: "2",
  break: "4",
};
const MAKEUP_KIT = {
  category: GEAR,
  name: "Makeup Kit",
  type: "tool",
  barter: "3",
  bulk: "L",
  break: "1",
};
const MAP_LOCAL = {
  category: GEAR,
  name: "Map, Local",
  type: "tool",
  barter: "2",
  bulk: "L",
  break: "1",
};
const MULTITOOL = {
  category: GEAR,
  name: "Multitool",
  type: "tool",
  barter: "4",
  bulk: "L",
  break: "2",
};
const MUSICAL_INSTRUMENT = {
  category: GEAR,
  name: "Musical Instrument",
  type: "tool",
  barter: "2",
  bulk: "L",
  break: "2",
};
const POWER_SHUNT = {
  category: GEAR,
  name: "Power Shunt ",
  type: "electronic",
  barter: "4",
  bulk: "L",
  break: "1",
};
const REFERENCE_BOOKS = {
  category: GEAR,
  name: "Reference Books",
  type: "tool",
  barter: "3",
  bulk: "10",
  break: "1",
};
const RADIO_BATTERY = {
  category: GEAR,
  name: "Radio, Battery ",
  type: "electronic",
  barter: "3",
  bulk: "L",
  break: "1",
};
const RADIO_CRANK = {
  category: GEAR,
  name: "Radio, Crank ",
  type: "electronic",
  barter: "5",
  bulk: "L",
  break: "2",
};
const ROPE = {
  category: GEAR,
  name: "Rope (20 ft)",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "2",
};
const SHOVEL = {
  category: GEAR,
  name: "Shovel",
  type: "tool",
  barter: "1",
  bulk: "1",
  break: "2",
};
const SIPHON_KIT = {
  category: GEAR,
  name: "Siphon Kit",
  type: "tool",
  barter: "3",
  bulk: "L",
  break: "2",
};
const SKILLET = {
  category: GEAR,
  name: "Skillet*",
  type: "tool",
  barter: "1",
  bulk: "1",
  break: "4",
};
const TARP = {
  category: GEAR,
  name: "Tarp ",
  type: "cloth",
  barter: "1",
  bulk: "1",
  break: "2",
};
const TENT = {
  category: GEAR,
  name: "Tent (2 Person) ",
  type: "cloth",
  barter: "3",
  bulk: "2",
  break: "2",
};
const TRANSLATION_DICTIONARY = {
  category: GEAR,
  name: "Translation Dictionary",
  type: "tool",
  barter: "2",
  bulk: "L",
  break: "1",
};
const TRAP_EXPLOSIVE = {
  category: GEAR,
  name: "Trap, Explosive",
  type: "tool",
  barter: "2",
  bulk: "L",
  break: "2",
};
const TRAP_NOISE = {
  category: GEAR,
  name: "Trap, Noise",
  type: "tool",
  barter: "1",
  bulk: "L",
  break: "1",
};
const TRAP_TRIP_WIRE = {
  category: GEAR,
  name: "Trap, Trip Wire",
  type: "tool",
  barter: "2",
  bulk: "L",
  break: "1",
};
const WALKIE_TALKIE = {
  category: GEAR,
  name: "Walkie Talkie (each) ",
  type: "electronic",
  barter: "4",
  bulk: "L",
  break: "2",
};
const WRENCH = {
  category: GEAR,
  name: "Wrench",
  type: "tool",
  barter: "1",
  bulk: "1",
  break: "4",
};
const BACKPACK = {
  category: GEAR,
  name: "Backpack ",
  type: "cloth",
  barter: "1",
  bulk: "1",
  break: "4",
};
const HARDHAT = {
  category: GEAR,
  name: "Bike Helmet/Hardhat ",
  type: "synthetic",
  barter: "3",
  bulk: "L",
  break: "4",
};
const HIKING_BOOTS = {
  category: GEAR,
  name: "Hiking Boots ",
  type: "leather",
  barter: "3",
  bulk: "L",
  break: "4",
};
const HOLSTER = {
  category: GEAR,
  name: "Holster (pistol) ",
  type: "leather",
  barter: "2",
  bulk: "L",
  break: "2",
};
const MILITARY_HELMET = {
  category: GEAR,
  name: "Military Helmet ",
  type: "synthetic",
  barter: "5",
  bulk: "L",
  break: "8",
};
const TOOL_BELT = {
  category: GEAR,
  name: "Tool Belt ",
  type: "leather",
  barter: "1",
  bulk: "L",
  break: "2",
};
const RAINCOAT = {
  category: GEAR,
  name: "Raincoat ",
  type: "cloth",
  barter: "1",
  bulk: "L",
  break: "2",
};
const URBAN_CAMOUFLAGE = {
  category: GEAR,
  name: "Urban Camouflage ",
  type: "patchwork",
  barter: "1",
  bulk: "1",
  break: "2",
};
const WATCH = {
  category: GEAR,
  name: "Watch ",
  type: "electronic",
  barter: "2",
  bulk: "L",
  break: "1",
};

const LOOT_AREAS = [
  HARDWARE_STORE,
  BIG_BOX,
  GAS_STATION,
  SUPERMARKET,
  DEPARTMENT_STORE,
  OUTDOORS_STORE,
  SPORTS_STORE,
  MEMBERS_CLUB,
  CLOTHING_STORE,
  OFFICE_SUPPLY,
  PET_STORE,
  CRAFT_STORE,
  ELECTRONICS_STORE,
  RESTAURANT,
  AUTO_PARTS,
  FURNITURE_STORE,
  GUN_STORE,
  NOVELTY_STORE,
  BOOK_STORE,
  PHARMACY,
  BAR,
  DENTIST_OFFICE,
  DOCTORS_OFFICE,
  HOSPITAL,
  POLICE_STATION,
  FIRE_STATION,
  ANIMAL_CONTROL,
  NATIONAL_GUARD,
  SCHOOL,
  SELF_STORAGE,
  MUSIC_STORE,
  LABORATORY,
  EQUIPMENT_RENTAL,
  AIRPORT,
  MUNICIPAL_BUILDING,
  GARDEN_STORE,
  BANK,
  MUSEUM,
  BARN,
  RURAL_HOUSE,
  SUBURBAN_HOUSE,
  URBAN_HOUSE,
  APARTMENT,
  DOCK,
  TRAIN_STATION,
];

const ALL_ITEMS = [
  BIKER_GEAR,
  BULLET_PROOF_VEST,
  CLOTHES_BASIC,
  CLOTHES_FANCY,
  CLOTHES_WINTER,
  FIREFIGHTER_GEAR,
  LAB_GEAR,
  LEATHER_ARMOR,
  LIGHT_PATCHWORK,
  WORKWEAR,
  HAZMAT_SUIT,
  HEAVY_PATCHWORK,
  INFANTRY_ARMOR,
  IRON_ARMOR,
  POLICE_BODY_ARMOR,
  RIOT_SHIELD,
  SPORTS_PROTECTION,
  ZDAY_ARMOR,
  IMPROVISED_SHIELD,
  RIOT_SHIELD,
  BASEBALL_BAT,
  BRANCH,
  BRASS_KNUCKLES,
  BRICK,
  CRAFTED_SPEAR,
  CRUDE_SPEAR,
  GARDEN_SHEARS,
  GOLF_CLUB,
  HAND_AXE,
  KITCHEN_KNIFE,
  POCKET_KNIFE,
  SCREWDRIVER,
  SHIV,
  TOOL_HEAVY,
  CHAINSAW,
  COMBAT_KNIFE,
  CRUDE_SWORD,
  FIRE_AXE,
  KATANA,
  MACHETE,
  SLEDGEHAMMER,
  BOTTLE,
  CRAFTED_BOW,
  CRUDE_BOW,
  CRUDE_PISTOL,
  CRUDE_RIFLE,
  DBL_BARREL_SHOTGUN,
  HUNTING_RIFLE,
  MOLOTOV_COCKTAIL,
  POCKET_PISTOL,
  REVOLVER,
  FRAG_GRENADE,
  INCENDIARY_GRENADE,
  TEAR_GAS_GRENADE,
  COMPOUND_BOW,
  CROSSBOW,
  HAND_CANNON,
  HEAVY_MACHINEGUN,
  LIGHT_MACHINEGUN,
  MILITARY_MACHINEGUN,
  PUMP_SHOTGUN,
  SEMIAUTO_PISTOL,
  SEMIAUTO_SHOTGUN,
  SNIPER_RIFLE,
  ARROWS_10,
  BULLETS_PISTOL_10,
  BULLETS_RIFLE_10,
  PIERCING_BULLETS_PISTOL_5,
  PIERCING_BULLETS_RIFLE_OR_SHOTGUN_5,
  ZROUND_BULLETS_PISTOL_1,
  ZROUND_BULLETS_RIFLE_1,
  BEER,
  CANNED_GOODS,
  CANNED_GOODS_EXPIRED,
  LIQUOR,
  MEAT_FRESH,
  RATION_BAR,
  RATION_DAY,
  SOFT_DRINK,
  VEGETABLES_FRESH,
  WATER,
  ASPIRIN,
  BANDAGES,
  COLD_PACK,
  FIRST_AID_KIT,
  SEDATIVE,
  SPLINT,
  SURGICAL_KIT,
  VITAMINS,
  WATER_PURIFICATION_TABLETS,
  ZNOC,
  AUTOMOTIVE_KIT,
  BEDROLL,
  BATTERY_SMALL,
  BATTERY_LARGE,
  CANTEEN,
  CLIMBING_KIT,
  COMPASS,
  CROWBAR,
  DUCT_TAPE,
  FLASHLIGHT,
  GASOLINE,
  GENERATOR,
  HAMMER,
  HEADLIGHT,
  LAPTOP,
  LIGHTER,
  LOCKPICKS,
  MACHINERY_KIT,
  MAKEUP_KIT,
  MAP_LOCAL,
  MULTITOOL,
  MUSICAL_INSTRUMENT,
  POWER_SHUNT,
  REFERENCE_BOOKS,
  RADIO_BATTERY,
  RADIO_CRANK,
  ROPE,
  SHOVEL,
  SIPHON_KIT,
  SKILLET,
  TARP,
  TENT,
  TRANSLATION_DICTIONARY,
  TRAP_EXPLOSIVE,
  TRAP_NOISE,
  TRAP_TRIP_WIRE,
  WALKIE_TALKIE,
  WRENCH,
  BACKPACK,
  HARDHAT,
  CLOTHES_BASIC,
  CLOTHES_FANCY,
  CLOTHES_WINTER,
  HIKING_BOOTS,
  HOLSTER,
  MILITARY_HELMET,
  TOOL_BELT,
  RAINCOAT,
  URBAN_CAMOUFLAGE,
  WATCH,
];

const LOOT_TABLE = {
  [HARDWARE_STORE]: [
    {
      item: TOOL_BELT,
      weighting: 3,
    },
    {
      item: WRENCH,
      weighting: 1,
    },
    {
      item: IMPROVISED_SHIELD,
      weighting: 2,
    },
  ],
  [BIG_BOX]: [],
  [GAS_STATION]: [],
  [SUPERMARKET]: [],
  [DEPARTMENT_STORE]: [],
  [OUTDOORS_STORE]: [],
  [SPORTS_STORE]: [],
  [MEMBERS_CLUB]: [],
  [CLOTHING_STORE]: [],
  [OFFICE_SUPPLY]: [],
  [PET_STORE]: [],
  [CRAFT_STORE]: [],
  [ELECTRONICS_STORE]: [],
  [RESTAURANT]: [],
  [AUTO_PARTS]: [],
  [FURNITURE_STORE]: [],
  [GUN_STORE]: [],
  [NOVELTY_STORE]: [],
  [BOOK_STORE]: [],
  [PHARMACY]: [],
  [BAR]: [],
  [DENTIST_OFFICE]: [],
  [DOCTORS_OFFICE]: [],
  [HOSPITAL]: [],
  [POLICE_STATION]: [],
  [FIRE_STATION]: [],
  [ANIMAL_CONTROL]: [],
  [NATIONAL_GUARD]: [],
  [SCHOOL]: [],
  [SELF_STORAGE]: [],
  [MUSIC_STORE]: [],
  [LABORATORY]: [],
  [EQUIPMENT_RENTAL]: [],
  [AIRPORT]: [],
  [MUNICIPAL_BUILDING]: [],
  [GARDEN_STORE]: [],
  [BANK]: [],
  [MUSEUM]: [],
  [BARN]: [],
  [RURAL_HOUSE]: [],
  [SUBURBAN_HOUSE]: [],
  [URBAN_HOUSE]: [],
  [APARTMENT]: [],
  [DOCK]: [],
  [TRAIN_STATION]: [],
};

const GEAR_CATEGORIES = [AMMO, FOOD, MEDICINE, GEAR];

export { LOOT_AREAS, ALL_ITEMS, LOOT_TABLE, GEAR_CATEGORIES, ARMOR, WEAPON };

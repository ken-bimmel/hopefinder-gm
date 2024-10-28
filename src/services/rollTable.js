import { LOOT_TABLE } from "../data/lootTables";

function buildWeightedTable(table) {
  const weightedTable = [];
  const deDupedTable = new Set(table);
  for (let entry of deDupedTable) {
    const weighting = entry.weighting;
    for (let i = 0; i < weighting; i++) {
      weightedTable.push(entry.item);
    }
  }
  return weightedTable;
}

function rollOnTable(table) {
  const max = table.length;
  const randomIndex = Math.floor(Math.random() * max);
  return table[randomIndex];
}

function rollTable(selectedTable, targetBarter, includeFlavorBarter) {
  const table = LOOT_TABLE[selectedTable];
  const weightedTable = buildWeightedTable(table);
  let accruedBarter = 0;
  const rolledItems = [];
  while (accruedBarter < targetBarter) {
    const rolledItem = rollOnTable(weightedTable);
    rolledItems.push(rolledItem);
    accruedBarter += parseInt(rolledItem.barter);
  }
  return rolledItems;
}

export default rollTable;

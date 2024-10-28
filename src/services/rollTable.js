import { LOOT_TABLE } from "../data/lootTables";
import { dedupeLootTable } from "./dedupeTable";
import { nameSortComparator } from "./sortDrops";

function buildWeightedTable(table) {
  const weightedTable = [];
  const dedupedTable = dedupeLootTable(table);
  console.log({ dedupedTable, table });
  for (let entry of dedupedTable) {
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
  return rolledItems.sort(nameSortComparator);
}

export default rollTable;

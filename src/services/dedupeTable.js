export function dedupeLootTable(lootTable) {
  const itemIds = lootTable.map((entry) => entry.item.name);
  console.log({ itemIds, lootTable });
  return lootTable.filter(
    (entry, index) => !itemIds.includes(entry.item.name, index + 1)
  );
}

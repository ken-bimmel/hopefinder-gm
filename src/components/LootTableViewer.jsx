import React, { useState } from "react";
import {
  InputLabel,
  NativeSelect,
  Grid2,
  Card,
  CardHeader,
} from "@mui/material";
import { LOOT_AREAS, LOOT_TABLE } from "../data/lootTables";
import ArmorTable from "./ArmorTable";
import WeaponTable from "./WeaponTable";
import GearTable from "./GearTable";
import {
  filterToArmorItems,
  filterToGearItems,
  filterToWeaponItems,
} from "../services/filterDrops";
import { nameSortComparator } from "../services/sortDrops";

function flattenAndSort(lootTable) {
  return lootTable
    .map((entry) => {
      return { ...entry.item, weighting: entry.weighting };
    })
    .sort(nameSortComparator);
}

function LootRoller() {
  const [selectedRollTable, setSelectedRollTable] = useState(LOOT_AREAS[0]);
  const [tableItems, setTableItems] = useState(
    flattenAndSort(LOOT_TABLE[selectedRollTable])
  );

  const updateSelectedRollTable = function (event) {
    setSelectedRollTable(event.target.value);
    setTableItems(flattenAndSort(LOOT_TABLE[event.target.value]));
  };

  console.log({ selectedRollTable, tableItems, LOOT_AREAS, LOOT_TABLE });

  return (
    <Card style={{ maxHeight: "calc(100vh - 80px)" }}>
      <CardHeader title="Loot Table Viewer" />
      <Grid2
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}
        style={{ margin: "0px", width: "100%" }}
      >
        <Grid2 item style={{ width: "100%", margin: "0", padding: "12px" }}>
          <Grid2
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ margin: "0px" }}
          >
            <Grid2 item>
              <InputLabel variant="standard" htmlFor="roll-area-select">
                Area
              </InputLabel>
              <NativeSelect
                defaultValue={LOOT_AREAS[0]}
                onChange={updateSelectedRollTable}
                inputProps={{
                  name: "roll-loot-area",
                  id: "roll-area-select",
                }}
              >
                {LOOT_AREAS.map((area) => {
                  return (
                    <option value={area} key={area}>
                      {area}
                    </option>
                  );
                })}
              </NativeSelect>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item style={{ margin: "0px", width: "100%" }}>
          <Grid2
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={4}
            sx={{ maxHeight: "85vh", overflowY: "scroll" }}
            wrap="nowrap"
          >
            <Grid2 item style={{ width: "100%", padding: "12px" }}>
              <ArmorTable
                armorItems={filterToArmorItems(tableItems)}
                includeWeighting
              />
            </Grid2>
            <Grid2 item style={{ width: "100%", padding: "12px" }}>
              <WeaponTable
                weaponItems={filterToWeaponItems(tableItems)}
                includeWeighting
              />
            </Grid2>
            <Grid2 item style={{ width: "100%", padding: "12px" }}>
              <GearTable
                gearItems={filterToGearItems(tableItems)}
                includeWeighting
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Card>
  );
}

export default LootRoller;

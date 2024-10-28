import React, { useState } from "react";
import {
  Button,
  InputLabel,
  NativeSelect,
  Grid2,
  TextField,
  Card,
  CardHeader,
  FormControlLabel,
  Switch,
  FormControl,
  FormGroup,
  Tooltip,
} from "@mui/material";
import { LOOT_AREAS } from "../data/lootTables";
import rollTable from "../services/rollTable";
import ArmorTable from "./ArmorTable";
import WeaponTable from "./WeaponTable";
import GearTable from "./GearTable";
import {
  filterToArmorItems,
  filterToGearItems,
  filterToWeaponItems,
} from "../services/filterDrops";

function LootRoller() {
  const [selectedRollTable, setSelectedRollTable] = useState(LOOT_AREAS[0]);
  const [targetBarter, setTargetBarter] = useState(1);
  const [rolledItems, setRolledItems] = useState([]);
  const [includeFlavorBarter, setIncludeFlavorBarter] = useState(true);

  const updateSelectedRollTable = function (event) {
    setSelectedRollTable(event.target.value);
  };
  const updateTargetBarter = function (event) {
    setTargetBarter(event.target.value);
  };
  const updateIncludeFlavorBarter = function (event) {
    setIncludeFlavorBarter(event.target.checked);
  };

  const rollWithValues = function () {
    const results = rollTable(
      selectedRollTable,
      targetBarter,
      includeFlavorBarter
    );
    setRolledItems(results);
  };

  return (
    <Card style={{ maxHeight: "calc(100vh - 80px)" }}>
      <CardHeader title="Loot Generator" />
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
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    rollWithValues();
                  }
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
            <Grid2 item>
              <TextField
                id="target-barter-select"
                label="Target Barter"
                type="number"
                defaultValue={1}
                onChange={updateTargetBarter}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    rollWithValues();
                  }
                }}
              />
            </Grid2>
            <Grid2 item>
              <FormControl>
                <FormGroup>
                  <Tooltip title={"Include unofficial items with flavor"}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={includeFlavorBarter}
                          onChange={updateIncludeFlavorBarter}
                        />
                      }
                      label="Fun barter?"
                      value="bottom"
                    />
                  </Tooltip>
                </FormGroup>
              </FormControl>
            </Grid2>
            <Grid2 item>
              <Button onClick={rollWithValues}>Roll</Button>
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
              <ArmorTable armorItems={filterToArmorItems(rolledItems)} />
            </Grid2>
            <Grid2 item style={{ width: "100%", padding: "12px" }}>
              <WeaponTable weaponItems={filterToWeaponItems(rolledItems)} />
            </Grid2>
            <Grid2 item style={{ width: "100%", padding: "12px" }}>
              <GearTable gearItems={filterToGearItems(rolledItems)} />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Card>
  );
}

export default LootRoller;

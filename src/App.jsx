import { useState } from "react";
import {
  Button,
  InputLabel,
  NativeSelect,
  Grid,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { LOOT_AREAS, ALL_ITEMS } from "./data/lootTables";
import rollTable from "./services/rollTable";
import ArmorTable from "./components/ArmorTable";
import WeaponTable from "./components/WeaponTable";
import GearTable from "./components/GearTable";
import {
  filterToArmorItems,
  filterToGearItems,
  filterToWeaponItems,
} from "./services/filterDrops";
import EnhancedTable from "./components/EnhancedTable";

function App() {
  const [selectedRollTable, setSelectedRollTable] = useState(LOOT_AREAS[0]);
  const [targetBarter, setTargetBarter] = useState(1);
  const [rolledItems, setRolledItems] = useState([]);
  const [selectedModifyTable, setSelectedModifyTable] = useState(LOOT_AREAS[0]);
  const [modifyTable, setModifyTable] = useState([]);

  const updateSelectedRollTable = function (event) {
    setSelectedRollTable(event.target.value);
  };
  const updateSelectedModifyTable = function (event) {
    setSelectedModifyTable(event.target.value);
  };
  const updateTargetBarter = function (event) {
    setTargetBarter(event.target.value);
  };

  const updateModifyList = function (selectedItems) {
    const localModifyTable = [...modifyTable];
    for (let item of selectedItems) {
      const foundItem = ALL_ITEMS.filter((elem) => elem.name === item)[0];
      if (!localModifyTable.includes(foundItem)) {
        localModifyTable.push(foundItem);
      }
    }
    setModifyTable(localModifyTable);
  };

  const rollWithValues = function () {
    const results = rollTable(selectedRollTable, targetBarter);
    setRolledItems(results);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
      style={{ padding: "32px" }}
    >
      {/* <Grid item style={{ width: "100%" }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Age
            </InputLabel>
            <NativeSelect
              defaultValue={LOOT_AREAS[0]}
              onChange={updateSelectedTable}
              inputProps={{
                name: "loot_area",
                id: "uncontrolled-native",
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
          </Grid>
          <Grid item>
            <TextField
              id="target-barter-select"
              label="Target Barter"
              type="number"
              defaultValue={1}
              onChange={updateTargetBarter}
            />
          </Grid>
          <Grid item>
            <Button onClick={rollWithValues}>Roll</Button>
          </Grid>
        </Grid>
      </Grid> */}
      <Grid
        item
        style={{ width: "100%", paddingTop: "16px", marginTop: "16px" }}
      >
        <Grid container direction="row" justifyContent="flex-start">
          <Grid item xs={6} style={{ paddingRight: "6px" }}>
            <Card>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={4}
                style={{ margin: "0px", width: "100%" }}
              >
                <Grid
                  item
                  style={{ width: "100%", margin: "0", padding: "12px" }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    style={{ margin: "0px" }}
                  >
                    <Grid item>
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
                    </Grid>
                    <Grid item>
                      <TextField
                        id="target-barter-select"
                        label="Target Barter"
                        type="number"
                        defaultValue={1}
                        onChange={updateTargetBarter}
                      />
                    </Grid>
                    <Grid item>
                      <Button onClick={rollWithValues}>Roll</Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{ width: "100%", padding: "12px" }}>
                  <ArmorTable armorItems={filterToArmorItems(rolledItems)} />
                </Grid>
                <Grid item style={{ width: "100%", padding: "12px" }}>
                  <WeaponTable weaponItems={filterToWeaponItems(rolledItems)} />
                </Grid>
                <Grid item style={{ width: "100%", padding: "12px" }}>
                  <GearTable gearItems={filterToGearItems(rolledItems)} />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "6px" }}>
            <Card>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item xs={1}>
                  <InputLabel variant="standard" htmlFor="modify-area-select">
                    Area
                  </InputLabel>
                  <NativeSelect
                    defaultValue={LOOT_AREAS[0]}
                    onChange={updateSelectedModifyTable}
                    inputProps={{
                      name: "modify-loot-area",
                      id: "modify-area-select",
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
                </Grid>
                <Grid item xs={5} style={{ width: "100%", padding: "12px" }}>
                  <EnhancedTable
                    title="All Items"
                    rows={ALL_ITEMS}
                    headCells={[
                      {
                        id: "name",
                        numeric: false,
                        disablePadding: true,
                        label: "Name",
                      },
                      {
                        id: "type",
                        numeric: false,
                        disablePadding: true,
                        label: "Type",
                      },
                      {
                        id: "barter",
                        numeric: false,
                        disablePadding: true,
                        label: "Barter",
                      },
                      {
                        id: "bulk",
                        numeric: false,
                        disablePadding: true,
                        label: "Bulk",
                      },
                      {
                        id: "break",
                        numeric: false,
                        disablePadding: true,
                        label: "Break",
                      },
                    ]}
                    action={updateModifyList}
                  />
                </Grid>
                <Grid item xs={5} style={{ width: "100%", padding: "12px" }}>
                  <EnhancedTable
                    title="Loot Table"
                    rows={modifyTable}
                    headCells={[
                      {
                        id: "name",
                        numeric: false,
                        disablePadding: true,
                        label: "Name",
                      },
                      {
                        id: "type",
                        numeric: false,
                        disablePadding: true,
                        label: "Type",
                      },
                      {
                        id: "barter",
                        numeric: false,
                        disablePadding: true,
                        label: "Barter",
                      },
                      {
                        id: "bulk",
                        numeric: false,
                        disablePadding: true,
                        label: "Bulk",
                      },
                      {
                        id: "break",
                        numeric: false,
                        disablePadding: true,
                        label: "Break",
                      },
                    ]}
                    action={updateModifyList}
                  />
                </Grid>
                <Grid item xs={1} style={{ width: "100%", padding: "12px" }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Button>Export to JSON</Button>
                    </Grid>
                    <Grid item>
                      <Button>Save</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="overline">
              All game content © 2022 Minotaur Games
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="overline">
              Content distributed under{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://opengamingfoundation.org/ogl.html"
              >
                OGL v1.0a
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="overline">
              Software distributed under the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mit-license.org/"
              >
                MIT License
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

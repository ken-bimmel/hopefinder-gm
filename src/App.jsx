import { useState } from "react";
import {
  Button,
  InputLabel,
  NativeSelect,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LOOT_AREAS } from "./data/lootTables";
import rollTable from "./services/rollTable";
import ArmorTable from "./components/ArmorTable";
import WeaponTable from "./components/WeaponTable";
import GearTable from "./components/GearTable";
import {
  filterToArmorItems,
  filterToGearItems,
  filterToWeaponItems,
} from "./services/filterDrops";

function App() {
  const [selectedTable, setSelectedTable] = useState(LOOT_AREAS[0]);
  const [targetBarter, setTargetBarter] = useState(1);
  const [rolledItems, setRolledItems] = useState([]);

  const updateSelectedTable = function (event) {
    setSelectedTable(event.target.value);
  };
  const updateTargetBarter = function (event) {
    setTargetBarter(event.target.value);
  };

  const rollWithValues = function () {
    const results = rollTable(selectedTable, targetBarter);
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
      <Grid item style={{ width: "100%" }}>
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
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <ArmorTable armorItems={filterToArmorItems(rolledItems)} />
          </Grid>
          <Grid item>
            <WeaponTable weaponItems={filterToWeaponItems(rolledItems)} />
          </Grid>
          <Grid item>
            <GearTable gearItems={filterToGearItems(rolledItems)} />
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

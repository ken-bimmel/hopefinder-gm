import { useState } from "react";
import {
  Button,
  InputLabel,
  NativeSelect,
  Grid,
  TextField,
} from "@mui/material";
import { LOOT_AREAS, LOOT_TABLE } from "./data/lootTables";

function App() {
  const [selectedTable, setSelectedTable] = useState(LOOT_AREAS[0]);
  const [targetBarter, setTargetBarter] = useState(1);

  const updateSelectedTable = function (event) {
    setSelectedTable(event.target.value);
  };
  const updateTargetBarter = function (event) {
    setTargetBarter(event.target.value);
  };

  const rollTable = function () {
    const table = LOOT_TABLE[selectedTable];
    console.log(table, targetBarter);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
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
              onChange={updateTargetBarter}
            />
          </Grid>
          <Grid item>
            <Button onClick={rollTable}>Roll</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

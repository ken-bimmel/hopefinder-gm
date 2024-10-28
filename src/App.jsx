import React, { useState } from "react";
import {
  Button,
  InputLabel,
  NativeSelect,
  Grid2,
  Typography,
  Card,
} from "@mui/material";
import { LOOT_AREAS, ALL_ITEMS } from "./data/lootTables";
import EnhancedTable from "./components/EnhancedTable";
import LootRoller from "./components/LootRoller";
import LootTableViewer from "./components/LootTableViewer";

function App() {
  const [selectedModifyTable, setSelectedModifyTable] = useState(LOOT_AREAS[0]);
  const [modifyTable, setModifyTable] = useState([]);

  const updateSelectedModifyTable = function (event) {
    setSelectedModifyTable(event.target.value);
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

  return (
    <Grid2
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      style={{ padding: "32px", maxHeight: "100vh" }}
      wrap="nowrap"
    >
      <Grid2 item style={{ width: "100%" }}>
        <Grid2 container direction="row" justifyContent="flex-start">
          <Grid2 item xs={6} style={{ paddingRight: "6px" }}>
            <LootRoller />
          </Grid2>
          <Grid2 item xs={6} style={{ paddingRight: "6px" }}>
            <LootTableViewer />
          </Grid2>
          {/* <Grid2 item xs={6} style={{ paddingLeft: "6px" }}>
            <Card>
              <Grid2
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid2 item xs={1}>
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
                </Grid2>
                <Grid2 item xs={5} style={{ width: "100%", padding: "12px" }}>
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
                </Grid2>
                <Grid2 item xs={5} style={{ width: "100%", padding: "12px" }}>
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
                </Grid2>
                <Grid2 item xs={1} style={{ width: "100%", padding: "12px" }}>
                  <Grid2
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid2 item>
                      <Button>Export to JSON</Button>
                    </Grid2>
                    <Grid2 item>
                      <Button>Save</Button>
                    </Grid2>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Card>
          </Grid2> */}
        </Grid2>
      </Grid2>
      <Grid2 item>
        <Grid2 container direction="row" spacing={4}>
          <Grid2 item>
            <Typography variant="overline">
              All game content © 2022 Minotaur Games
            </Typography>
          </Grid2>
          <Grid2 item>
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
          </Grid2>
          <Grid2 item>
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
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}

export default App;

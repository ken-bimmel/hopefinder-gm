import React from "react";
import { Grid2, Typography } from "@mui/material";
import LootRoller from "./components/LootRoller";
import LootTableViewer from "./components/LootTableViewer";

function App() {
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

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { filterToGearItems } from "../services/filterDrops";

function GearTable({ rolledItems, includeWeighting = false }) {
  const gearItems = filterToGearItems(rolledItems) ?? [];
  return (
    <TableContainer component={Paper}>
      <Typography
        variant="h6"
        style={{ paddingLeft: "16px", paddingTop: "4px" }}
      >
        Gear
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Barter</TableCell>
            <TableCell align="right">Bulk</TableCell>
            <TableCell align="right">Break</TableCell>
            {includeWeighting && <TableCell align="right">Weighting</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {gearItems.map((row, index) => (
            <TableRow
              key={row.name + " " + index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.barter}</TableCell>
              <TableCell align="right">{row.bulk}</TableCell>
              <TableCell align="right">{row.break}</TableCell>
              {includeWeighting && (
                <TableCell align="right">{row.weighting}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

GearTable.propTypes = {
  rolledItems: PropTypes.array,
  includeWeighting: PropTypes.bool,
};

export default GearTable;

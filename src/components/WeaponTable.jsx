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

function WeaponTable({ weaponItems, includeWeighting = false }) {
  return (
    <TableContainer component={Paper}>
      <Typography
        variant="h6"
        style={{ paddingLeft: "16px", paddingTop: "4px" }}
      >
        Weapons
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Barter</TableCell>
            <TableCell align="right">Damage</TableCell>
            <TableCell align="right">Traits</TableCell>
            <TableCell align="right">Hands</TableCell>
            <TableCell align="right">Range</TableCell>
            <TableCell align="right">Reload</TableCell>
            <TableCell align="right">Bulk</TableCell>
            <TableCell align="right">Break</TableCell>
            {includeWeighting && <TableCell align="right">Weighting</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {weaponItems.map((row, index) => (
            <TableRow
              key={row.name + " " + index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.barter}</TableCell>
              <TableCell align="right">{row.damage}</TableCell>
              <TableCell align="right">{row.traits}</TableCell>
              <TableCell align="right">{row.hands}</TableCell>
              <TableCell align="right">{row.range}</TableCell>
              <TableCell align="right">{row.reload}</TableCell>
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

WeaponTable.propTypes = {
  weaponItems: PropTypes.array,
  includeWeighting: PropTypes.bool,
};

export default WeaponTable;

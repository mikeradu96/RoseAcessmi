import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "../GlobalStyle.css";
import { EuiDatePicker } from "@elastic/eui";
import moment from "moment";
import "@elastic/eui/dist/eui_theme_light.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    borderRadius: "15px",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      borderBottom: "2px",
      borderBottomColor: "red",
    },
  },
}))(TableRow);

function createData(session, startDate, details, action) {
  return { session, startDate, details, action };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

const useStyles = makeStyles({
  table: {
    paddingTop: "10px",
    minWidth: 700,
    width: "70%",
    justifyContent: "center",
  },
  centeredtxt: {
    color: "white",
    fontSize: "42px",
    textAlign: "center",
    paddingTop: "150px",
  },
  imgbtndown: {
    color: "white",
    background: "#FF8600",
    borderRadius: 25,
    width: "25%",
  },
  scheduleBtn: {
    color: "white",
    background: "#FF8600",
    borderRadius: 10,
    width: "80%",
  },
  headerElements: {
    color: "#2374AB",
    background: "#E6FAFC",
    borderRadius: 25,

    whiteSpace: "nowrap",
  },
});

export default function CareerCouseling() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(moment());
  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div className="tableContainer">
      <div className="careerCounselingContainer">
        <div className="careerCounselingBackground">
          <h1 className={classes.centeredtxt}>
            CAREER <br />
            COUNSELING
          </h1>
        </div>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <Button
                    className={classes.headerElements}
                    variant="contained"
                  >
                    {" "}
                    Session Name
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    className={classes.headerElements}
                    variant="contained"
                  >
                    {" "}
                    Start Date
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    className={classes.headerElements}
                    variant="contained"
                  >
                    {" "}
                    Details
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    className={classes.headerElements}
                    variant="contained"
                  >
                    {" "}
                    What are you waiting for?
                  </Button>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.session}>
                  <StyledTableCell align="center">
                    {row.session}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.startDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">More</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button className={classes.imgbtndown}>Join</Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="ccButonContainer">
        <Button className={classes.scheduleBtn}>
          SCHEDULE PRIVATE SESSION
        </Button>
      </div>
      <div>
        <EuiDatePicker
          className={classes.calendarcenter}
          selected={startDate}
          onChange={handleChange}
          showTimeSelect
          inline
          shadow={false}
        />
      </div>
    </div>
  );
}

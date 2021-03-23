import React, { useState } from "react";
import "../GlobalStyle.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

//icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

//Calendar
import { EuiDatePicker } from "@elastic/eui";
import moment from "moment";
import "@elastic/eui/dist/eui_theme_light.css";

//images
import TLW_Page_English from "../images/TLW_Page_EnglishWs.png";
import FB_Icon from "../images/facebook.png";

const useStyles = makeStyles((theme) => ({
  buttonsupport: {
    color: "#2374AB",
    background: "white",
    borderRadius: 25,
    border: "3px solid",
    borderColor: " #2374AB",
    whiteSpace: "nowrap",
  },
  imgbtndown: {
    color: "white",
    background: "#FF8600",
    borderRadius: 25,
    float: "left",
  },
  paddingsrch: {
    paddingLeft: "80px",
  },
  search: {
    position: "relative",
    borderRadius: "25px",
    background: "white",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  maintxt: {
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "1%",
    paddingButtom: "2%",
    fontSize: "18px",
    wordSpacing: "10px",
    textAlign: "justify",
  },
  bluebox: {
    paddingLeft: "15%",
    paddingBottom: "3%",
    paddingTop: "3%",
    background: "#2374AB",
    width: "80%",
  },
  activitiesContainer: {
    flexDirection: "row",
  },
  headerbox: {
    color: "white",
    whiteSpace: "nowrap",
    alignSelf: "center",
  },
  orangetxt: {
    color: "#FF8600",
    textAlign: "center",
  },
  buttonimg: {
    color: "#2374AB",
    whiteSpace: "nowrap",
  },
  photospace: {
    paddingTop: "5%",
    paddingLeft: "3%",
  },
  calendartxt: {
    color: "#2374AB",
    display: "block",
    textAlign: "center",
    paddingTop: "3%",
  },
  bluetxt: {
    color: "#2374AB",
    paddingLeft: "15%",
    paddingTop: "1%",
    fontSize: 20,
  },
  tppad: {
    paddingTop: "3%",
  },
  spacerform: {
    paddingTop: "2%",
    width: 223,
  },
  formbtn: {
    color: "white",
    background: "#FF8600",
    borderRadius: 25,
  },
  spaceformbtn: {
    paddingTop: "2%",
    paddingLeft: "15%",
    paddingBottom: "1%",
  },
  orangetxtbtn: {
    color: "#FF8600",
    paddingLeft: "20%",
    paddingTop: "5%",
    fontSize: 22,
  },
  bluetxtbtn: {
    color: "#2374AB",
    paddingLeft: "20%",
    fontSize: 22,
  },
  fbicon: {
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  orangetxtbtnright: {
    color: "#FF8600",
    paddingTop: "5%",
    fontSize: 22,
  },
  bluetxtbtnright: {
    color: "#2374AB",
    fontSize: 22,
    paddingBottom: "1%",
  },
  spacedown: {
    paddingBottom: "5%",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(moment());
  const handleChange = (date) => {
    setStartDate(date);
  };
  return (
    <div>
      <div>
        <div className="container imgbackground">
          <h2 className="headertxt">
            FILS Student <br />
            Guidance
          </h2>
          <p className="imgtxt">
            Find out more about the opportunities and support <br />
            available to you throughout your time at FILS.
            <br />
            Not sure where to ask?Try the Student Survival Guide
          </p>
          <div className="imgbtn">
            <Button className={classes.buttonsupport} variant="contained">
              <b>ACCES HERE THE STUDENT SUPPORT BOOKLET</b>
              <SvgIcon component={ArrowForwardIcon} />
            </Button>
          </div>
          <div className="imgbtndown">
            <Grid container>
              <Button className={classes.imgbtndown} variant="contained">
                REGISTER HERE
              </Button>
              <div className={classes.paddingsrch}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </div>
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <p className={classes.maintxt}>
              <b>
                We welcome you on this exciting journey in the world of science,
                technology, engineering and mathematics! Together we can explore
                big ideas, enjoy community with a small group of students and
                improve our knowledge on first year subjects.
              </b>
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.maintxt}>
              Our program aims at shaping your experience and academic future at
              FILS by offering career counseling mixed with tips &amp; tricks
              and social activities. Join the program to meet other students who
              share your interests and people who will show you perspectives
              that you never imagined.
            </p>
            <br />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.bluebox}
          >
            <Grid item xs={6}>
              <h2 className={classes.headerbox}>ABOUT US</h2>
              <br />
              <Button className={classes.buttonsupport} variant="contained">
                About Us <SvgIcon component={ArrowForwardIcon} />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <h2 className={classes.headerbox}>STUDENT GUIDANCE</h2>
              <br />
              <Button className={classes.buttonsupport} variant="contained">
                Student Guidance <SvgIcon component={ArrowForwardIcon} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.activitiesContainer}>
        <Grid container direction="row" justify="space-evenly" spacing={24}>
          <Grid item xl={3} md={3} sm={6} xs={12}>
            <img
              className={classes.photospace}
              src={TLW_Page_English}
              alt="imageRow"
            />
            <p className={classes.orangetxt}>
              <b>
                STUDENT REMEDIAL <br />
                COURSES
              </b>
            </p>
            <Box textAlign="center">
              <Button className={classes.buttonimg}>
                About Us <SvgIcon component={ArrowForwardIcon} />
              </Button>
            </Box>
          </Grid>
          <Grid item xl={3} md={3} sm={6} xs={12}>
            <img
              className={classes.photospace}
              src={TLW_Page_English}
              alt="imageRow"
            />
            <p className={classes.orangetxt}>
              <b>
                TECHNICAL LANGUAGE <br />
                WORKSHOPS
              </b>
            </p>
            <Box textAlign="center">
              <Button className={classes.buttonimg}>
                About Us <SvgIcon component={ArrowForwardIcon} />
              </Button>
            </Box>
          </Grid>
          <Grid item xl={3} md={3} sm={6} xs={12}>
            <img
              className={classes.photospace}
              src={TLW_Page_English}
              alt="imageRow"
            />
            <p className={classes.orangetxt}>
              <b>
                CAREER COUNSELING <br />
                SESSIONS
              </b>
            </p>
            <Box textAlign="center">
              <Button className={classes.buttonimg}>
                About Us <SvgIcon component={ArrowForwardIcon} />
              </Button>
            </Box>
          </Grid>
          <Grid item xl={3} md={3} sm={6} xs={12}>
            <img
              className={classes.photospace}
              src={TLW_Page_English}
              alt="imageRow"
            />
            <p className={classes.orangetxt}>
              <b>SOCIAL ACTIVITIES</b>
            </p>
            <Box textAlign="center">
              <Button className={classes.buttonimg}>
                About Us <SvgIcon component={ArrowForwardIcon} />
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider variant="middle" />
      </div>

      <div>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={12}>
            <h2 className={classes.calendartxt}>
              <b>What's happening when?</b>
            </h2>
          </Grid>

          <Grid item xs={12}>
            <EuiDatePicker
              className={classes.calendarcenter}
              selected={startDate}
              onChange={handleChange}
              showTimeSelect
              inline
              shadow={false}
            />
          </Grid>
        </Grid>
        <Divider variant="middle" />
      </div>
      <div className="ContainerHomeDown">
        <div className="feedbackContainer">
          <Grid item xs={12} sm={6} className={classes.tppad}>
            <h1 className={classes.bluetxt}>
              <b>
                Just say hi and how we can help
                <br /> you and we'll take it from there
              </b>
            </h1>
            <h1 className={classes.bluetxt}>We'd love to hear from you</h1>
            <h1 className={classes.bluetxt}>
              If you want to know more about the platform, <br />
              features or anything at all, drop us a line:{" "}
            </h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form noValidate autoComplete="off">
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <TextField
                  className={classes.spacerform}
                  id="outlined-basic"
                  label="Full Name..."
                  variant="outlined"
                />
                <TextField
                  className={classes.spacerform}
                  id="outlined-basic"
                  label="Email Address..."
                  variant="outlined"
                />
                <TextField
                  className={classes.spacerform}
                  id="outlined-multiline-static"
                  label="Your feedback here..."
                  multiline
                  rows={3}
                  variant="outlined"
                />
                <Box className={classes.spaceformbtn}>
                  <Button className={classes.formbtn} variant="contained">
                    SEND
                  </Button>
                </Box>
              </Grid>
            </form>
          </Grid>
        </div>

        <div className="blueContainer">
          <div className="contactContainer">
            <h2 className={classes.headerbox}>CONTACT US</h2>
            <br />
            <Button className={classes.buttonsupport} variant="contained">
              Click Here <SvgIcon component={ArrowForwardIcon} />
            </Button>
          </div>
          <div className="campusContainer">
            <h2 className={classes.headerbox}>WHERE TO FIND US!</h2>
            <br />
            <Button className={classes.buttonsupport} variant="contained">
              CAMPUS MAP <SvgIcon component={ArrowForwardIcon} />
            </Button>
          </div>
        </div>

        <Grid container direction="row" justify="space-evenly">
          <Grid item xs={12} sm={6}>
            <h1 className={classes.orangetxtbtn}>
              <b>Let's get social!</b>
            </h1>
            <a href="https://www.facebook.com/fils.upb/">
              <h1 className={classes.bluetxtbtn}>
                <b>Find us on</b>{" "}
                <img className={classes.fbicon} src={FB_Icon} alt="facebook" />
              </h1>
            </a>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={classes.spacedown}>
              <h1 className={classes.orangetxtbtnright}>
                <b>Newsletter</b>
              </h1>
              <h1 className={classes.bluetxtbtnright}>
                <b>Join our mailing list</b>
              </h1>
              <TextField
                id="outlined-basic"
                label="Email Address..."
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button className={classes.formbtn} variant="contained">
                        SUBSCRIBE
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavLinkLogo } from "./NavbarElements";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SvgIcon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

import Logo from "../images/Logo.png";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid black",
    borderRadius: "0px 0px 25px 25px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  buttonsupport: {
    color: "white",
    background: "#2374AB",
    borderRadius: 25,
    border: "3px solid",
    borderColor: " #2374AB",
    whiteSpace: "nowrap",
    width: 250,
    height: 38,
    marginLeft: 24,
    "&:hover": {
      backgroundColor: "#2374AB",
    },
    nostyle: {
      background: "white !important",
      borderRadius: "20 !important",
      color: "#2374AB !important",
    },
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.common.white,
      "& .MuiListItemIcon-root": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Nav>
        <NavLinkLogo to="/">
          <img src={Logo} />
        </NavLinkLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            ABOUT US
          </NavLink>
          {/* Dropdown */}
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.buttonsupport}
            variant="contained"
          >
            ACTIVITIES <SvgIcon component={ArrowForwardIcon} />
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <NavLinkLogo to="/remedial">
                <ListItemText primary="Remedial Courses" />
              </NavLinkLogo>
            </StyledMenuItem>
            <StyledMenuItem>
              <NavLinkLogo to="/practiceTests">
                <ListItemText primary="Practice Tests" />
              </NavLinkLogo>
            </StyledMenuItem>
            <StyledMenuItem>
              <NavLinkLogo to="/language">
                <ListItemText primary="Language Workshops" />
              </NavLinkLogo>
            </StyledMenuItem>
            <StyledMenuItem>
              <NavLinkLogo to="/career">
                <ListItemText primary="Career Couseling" />
              </NavLinkLogo>
            </StyledMenuItem>
            <StyledMenuItem>
              <NavLinkLogo to="/social">
                <ListItemText primary="Social Activities" />
              </NavLinkLogo>
            </StyledMenuItem>
          </StyledMenu>
          <NavLink to="/contact-us" activeStyle>
            CAMPUS AND OPPORTUNITIES
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <NavLink to="/sign-in" activeStyle>
            SIGN IN
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

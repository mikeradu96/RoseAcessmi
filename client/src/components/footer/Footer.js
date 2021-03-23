import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Logo from '../footer/logo.png';


const useStyles = makeStyles((theme) => ({
    greybg: {
        background: '#EDF0F4',
    },
    logo: {
        height: 115,
        width: 115,
    },
    copyright: {
        color: '#2374AB',
        paddingRight: 50,
        paddingTop: '2%',
        textAlign: 'right'
    },
    rightmove: {
        float: 'right'
    },
    copyrighttxt: {
        paddingRight: 50,
        color: '#2374AB',
        paddingBottom: 10,
        paddingTop: '2%',
    },
    copyright1: {
        color: '#2374AB',
        paddingRight: 50,
        paddingBottom: 10,
        paddingTop: '2%',
        textAlign: 'right'
    },
    copyrightlft: {
        color: '#2374AB',
        paddingTop: '2%',
        paddingBottom: 10,
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      },
      footer: {
        
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
            <section className={classes.greybg}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={6} >
                        <img className={classes.logo} src={Logo} alt='logo' />
                        <h2 className={classes.copyrightlft}><b>@ ROSE ACCESMI 2020.All rights reserved.</b></h2>
                    </Grid>
                    <Box className={classes.rightmove}>
                        <h2 className={classes.copyright}><b>About Us</b></h2>
                        <h2 className={classes.copyright}><b>Campus and Opportunities</b></h2>
                        <h2 className={classes.copyright}><b>Activities</b></h2>
                        <h2 className={classes.copyright1}><b>Contact</b></h2>
                        <p className={classes.copyrighttxt}><b><u>Cookie Policy</u> | <u>Privacy Policy</u> | <u>Terms of Use</u></b></p>
                    </Box>
                </Grid>
            </section>
            </footer>
        </div>

    );
};

export default Footer;

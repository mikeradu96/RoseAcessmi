import React from 'react';
import "../GlobalStyle.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'

//cards
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

//images
import TLW_Page_English from "../images/TLW_Page_EnglishWs.png";
import FB_Icon from "../images/facebook.png";

//dialogue
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
  centeredtxt: {
    color: 'white',
    fontSize: '42px',
    textAlign: 'center',
    paddingTop: '150px',
  },
  imgbtndown: {
    color: "white",
    background: "#FF8600",
    margin: 'auto',
    marginTop: '10px',
    display: 'block',
  },
  englishtxt: {
    color: '#2374AB',
    textAlign: 'center',
    paddingTop: '40px',
    paddingBottom: '20px'
  },
  cards: {
    maxWidth: '345',
  },
  orangetxt: {
    color: '#FF8600',
    textAlign: 'center',
  },
  alignitmcard: {
    textAlign: 'center'
  },
  bluecardtxt: {
    color: '#2374AB'
  },
  orangetxtcard: {
    color: '#FF8600'
  },
  cardbtn: {
    color: 'white',
    background: '#2374AB',
    borderRadius: 25,
    marginLeft: '130px',
    "&:hover": {
      backgroundColor: "#FF8600 !important"
    },
  },

  dividerspace: {
    paddingTop: '40px'
  },
  orangetxtbtn: {
    color: "#FF8600",
    paddingLeft: "20%",
    paddingTop: "5%",
    fontSize: 22,
  },
  bluetxtbtn: {
    color: '#2374AB',
    paddingLeft: '20%',
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
    color: '#2374AB',
    fontSize: 22,
    paddingBottom: "1%",
  },
  formbtn: {
    color: 'white',
    background: '#FF8600',
    borderRadius: 25,
  },
  spacedown: {
    paddingBottom: "5%",
  },
  orangetxtdialogue: {
    color: "#FF8600",
    textAlign: 'center'
  },
  orangetxtheaderdialog: {
    color: '#FF8600',
    textAlign: 'center',
    fontSize: 22,
    paddingBottom: '15px',
  },
  dialoguebtn: {
    color: 'white',
    background: '#2374AB',
    borderRadius: 25,
    marginLeft: '35px',
    marginTop: '10px',
    "&:hover": {
      backgroundColor: "#FF8600 !important"
    },
  }
}));

const PracticeTests = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <sector>
      <div className="container ptBackground">
        <h1 className={classes.centeredtxt}>PRACTICE <br/>TESTS</h1>
      </div>
      <Button className={classes.imgbtndown} variant="contained">
                REQUEST A MENTOR
      </Button>
      <p className={classes.englishtxt}>PRACTICE TESTS IN ENGLISH</p>
      <Grid
  container
  direction="row"
  justify="space-around"
  alignItems="center"
>
      <Card className={classes.cards}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Linear Algebra"
          height="140"
          className={classes.media}
          image= {TLW_Page_English}
          title="Linear Algebra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           <p className={classes.orangetxt}> LINEAR ALGEBRA <br/> PRACTICE TESTS </p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Intermediate Quiz Grade: </span><span className={classes.orangetxtcard}>50%</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Final Quiz Grade: </span><span className={classes.orangetxtcard}>not attempted</span></p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.cardbtn} variant="contained"  onClick={handleClickOpen}>
        PRACTICE
      </Button>
      <Dialog  className={classes.dialogup} fullWidth={true} maxWidth = {'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.orangetxtdialogue}>LINEAR ALGEBRA PRACTICE TEST</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Grid
  container
  direction="row"
  justify="space-around"
  alignItems="center"
>
<Box>
    <p className={classes.orangetxtheaderdialog}>INTERMEDIATE <br/>QUIZ</p>
<p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Quiz Duration: </span><span className={classes.orangetxtcard}>45 min</span></p>
<p className={classes.alignitmcard}><span className={classes.bluecardtxt}>This is your </span><span className={classes.orangetxtcard}> 4 attempt</span></p>
<p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Last attempt grade: </span><span className={classes.orangetxtcard}> 65%</span></p>
<Button className={classes.dialoguebtn} variant="contained">
        TAKE QUIZ NOW
</Button>
</Box>
<Box style={{ borderRight: '0.1em solid black', padding: '0.5em', height: '150px', color: 'grey' }}>
</Box>
<Box>
    <p className={classes.orangetxtheaderdialog}>Final <br/>QUIZ</p>
<p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Final Duration: </span><span className={classes.orangetxtcard}>45 min</span></p>
<p className={classes.alignitmcard}><span className={classes.bluecardtxt}>This is your </span><span className={classes.orangetxtcard}> 4 attempt</span></p>
<p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Last attempt grade: </span><span className={classes.orangetxtcard}> 65%</span></p>
<Button className={classes.dialoguebtn} variant="contained">
         TAKE QUIZ NOW
</Button>
</Box>
  </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </CardActions>
    </Card>

    <Card className={classes.cards}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Linear Algebra"
          height="140"
          className={classes.media}
          image= {TLW_Page_English}
          title="Linear Algebra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           <p className={classes.orangetxt}> CALCULUS <br/> PRACTICE TESTS </p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Intermediate Quiz Grade: </span><span className={classes.orangetxtcard}>50%</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Final Quiz Grade: </span><span className={classes.orangetxtcard}>not attempted</span></p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.cardbtn} variant="contained">
        PRACTICE
      </Button>
      </CardActions>
    </Card>

    <Card className={classes.cards}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Linear Algebra"
          height="140"
          className={classes.media}
          image= {TLW_Page_English}
          title="Linear Algebra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           <p className={classes.orangetxt}> FUNDAMENTALS OF ELECTRICAL<br/> ENGINEERING PRACTICE TEST</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Intermediate Quiz Grade: </span><span className={classes.orangetxtcard}>50%</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Final Quiz Grade: </span><span className={classes.orangetxtcard}>not attempted</span></p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.cardbtn} variant="contained">
        PRACTICE
      </Button>
      </CardActions>
    </Card>
    </Grid>

    <p className={classes.englishtxt}>PRACTICE TESTS IN FRENCH</p>

    <Grid
  container
  direction="row"
  justify="space-around"
  alignItems="center"
>
      <Card className={classes.cards}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Linear Algebra"
          height="140"
          className={classes.media}
          image= {TLW_Page_English}
          title="Linear Algebra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           <p className={classes.orangetxt}> LINEAR ALGEBRA <br/> PRACTICE TESTS </p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Intermediate Quiz Grade: </span><span className={classes.orangetxtcard}>50%</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Final Quiz Grade: </span><span className={classes.orangetxtcard}>not attempted</span></p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.cardbtn} variant="contained">
        PRACTICE
      </Button>
      </CardActions>
    </Card>

    <Card className={classes.cards}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Linear Algebra"
          height="140"
          className={classes.media}
          image= {TLW_Page_English}
          title="Linear Algebra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           <p className={classes.orangetxt}> CALCULUS <br/> PRACTICE TESTS </p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Intermediate Quiz Grade: </span><span className={classes.orangetxtcard}>50%</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Final Quiz Grade: </span><span className={classes.orangetxtcard}>not attempted</span></p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.cardbtn} variant="contained">
        PRACTICE
      </Button>
      </CardActions>
    </Card>

    <Card className={classes.cards}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Linear Algebra"
          height="140"
          className={classes.media}
          image= {TLW_Page_English}
          title="Linear Algebra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <p className={classes.orangetxt}> FUNDAMENTALS OF ELECTRICAL<br/> ENGINEERING PRACTICE TEST</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Intermediate Quiz Grade: </span><span className={classes.orangetxtcard}>50%</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Final Quiz Grade: </span><span className={classes.orangetxtcard}>not attempted</span></p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.cardbtn} variant="contained">
        PRACTICE
      </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid container direction="row" justify="space-evenly">
          <Grid item xs={12} sm={6} >
            <h1 className={classes.orangetxtbtn}><b>Let's get social!</b></h1>
            <a href="https://www.facebook.com/fils.upb/"><h1 className={classes.bluetxtbtn}><b>Find us on</b> <img className={classes.fbicon} src={FB_Icon} alt="facebook" /></h1></a>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box className={classes.spacedown}>
              <h1 className={classes.orangetxtbtnright}><b>Newsletter</b></h1>
              <h1 className={classes.bluetxtbtnright}><b>Join our mailing list</b></h1>
              <TextField
                id="outlined-basic"
                label="Email Address..."
                variant="outlined"
                InputProps={{ endAdornment: <InputAdornment position='end'><Button className={classes.formbtn} variant="contained">SUBSCRIBE</Button></InputAdornment> }}
              />
            </Box>
          </Grid>
        </Grid>
    </sector>
  );
};

export default PracticeTests;

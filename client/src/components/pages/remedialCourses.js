import React from 'react';
import "../GlobalStyle.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Collapse from '@material-ui/core/Collapse';

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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
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
    textAlign: 'left',
    paddingTop: '40px',
    paddingBottom: '20px',
    paddingLeft: '4%'
  },
  cards: {
    maxWidth: '345',
  },
  orangetxt: {
    color: '#FF8600',
    textAlign: 'center',
  },
  bluecardtxt: {
    color: '#2374AB',
    fontWeight: 'bold'
  },
  orangetxtcard: {
    color: '#FF8600',
    fontWeight: 'bold'
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
  formbtn: {
    color: 'white',
    background: '#FF8600',
    borderRadius: 25,
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
  fbicon: {
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  dropicontxt: {
    fontSize: '14px',
    color: '#2374AB'
  },
  centeredtxtcard: {
    paddingLeft: '140px'
  },
  alignitmcarddescription: {
    paddingTop: '10px'
  },
  orangetxtcarddescription: {
    color: '#FF8600',
  }
}));

const RemedialCourses = () => {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <sector>
      <div className="container rcBackground">
        <h1 className={classes.centeredtxt}>REMEDIAL <br/>COURSES</h1>
      </div>
      <p className={classes.englishtxt}>REMEDIAL COURSES IN ENGLISH</p>
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
           <p className={classes.orangetxt}>ALGEBRA</p>
          </Typography>
          <Button className={classes.cardbtn} variant="contained"  onClick={handleClickOpen}>
        ENROLL
      </Button>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.centeredtxtcard}>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <p className={classes.dropicontxt}>More</p>
          <ExpandMoreIcon />
        </IconButton>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Schedule: </span><br/><span className={classes.orangetxtcard}>Weekday, hour</span></p>
            <p className={classes.alignitmcarddescription}><span className={classes.bluecardtxt}>Course description: </span><br/><span className={classes.orangetxtcarddescription}>Descriere</span></p>

          </Typography>
        </CardContent>
      </Collapse>
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
           <p className={classes.orangetxt}>CALCULUS</p>
          </Typography>
          <Button className={classes.cardbtn} variant="contained"  onClick={handleClickOpen}>
        ENROLL
      </Button>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.centeredtxtcard}>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <p className={classes.dropicontxt}>More</p>
          <ExpandMoreIcon />
        </IconButton>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Schedule: </span><br/><span className={classes.orangetxtcard}>Weekday, hour</span></p>
            <p className={classes.alignitmcarddescription}><span className={classes.bluecardtxt}>Course description: </span><br/><span className={classes.orangetxtcarddescription}>Descriere</span></p>

          </Typography>
        </CardContent>
      </Collapse>
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
           <p className={classes.orangetxt}>FUNDAMENTALS OF<br/>ELECTRICAL ENGINEERING</p>
          </Typography>
          <Button className={classes.cardbtn} variant="contained"  onClick={handleClickOpen}>
        ENROLL
      </Button>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.centeredtxtcard}>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <p className={classes.dropicontxt}>More</p>
          <ExpandMoreIcon />
        </IconButton>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Schedule: </span><br/><span className={classes.orangetxtcard}>Weekday, hour</span></p>
            <p className={classes.alignitmcarddescription}><span className={classes.bluecardtxt}>Course description: </span><br/><span className={classes.orangetxtcarddescription}>Descriere</span></p>

          </Typography>
        </CardContent>
      </Collapse>
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
           <p className={classes.orangetxt}>ALGEBRA</p>
          </Typography>
          <Button className={classes.cardbtn} variant="contained"  onClick={handleClickOpen}>
        ENROLL
      </Button>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.centeredtxtcard}>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <p className={classes.dropicontxt}>More</p>
          <ExpandMoreIcon />
        </IconButton>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Schedule: </span><br/><span className={classes.orangetxtcard}>Weekday, hour</span></p>
            <p className={classes.alignitmcarddescription}><span className={classes.bluecardtxt}>Course description: </span><br/><span className={classes.orangetxtcarddescription}>Descriere</span></p>

          </Typography>
        </CardContent>
      </Collapse>
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
           <p className={classes.orangetxt}>CALCULUS</p>
          </Typography>
          <Button className={classes.cardbtn} variant="contained"  onClick={handleClickOpen}>
        ENROLL
      </Button>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.centeredtxtcard}>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <p className={classes.dropicontxt}>More</p>
          <ExpandMoreIcon />
        </IconButton>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Schedule: </span><br/><span className={classes.orangetxtcard}>Weekday, hour</span></p>
            <p className={classes.alignitmcarddescription}><span className={classes.bluecardtxt}>Course description: </span><br/><span className={classes.orangetxtcarddescription}>Descriere</span></p>

          </Typography>
        </CardContent>
      </Collapse>
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
           <p className={classes.orangetxt}>FUNDAMENTALS OF<br/>ELECTRICAL ENGINEERING</p>
          </Typography>
          <Button className={classes.cardbtn} variant="contained"  onClick={handleClickOpen}>
        ENROLL
      </Button>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.centeredtxtcard}>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <p className={classes.dropicontxt}>More</p>
          <ExpandMoreIcon />
        </IconButton>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course language: </span><span className={classes.orangetxtcard}>English</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Course professor: </span><span className={classes.orangetxtcard}>Marcel</span></p>
            <p className={classes.alignitmcard}><span className={classes.bluecardtxt}>Schedule: </span><br/><span className={classes.orangetxtcard}>Weekday, hour</span></p>
            <p className={classes.alignitmcarddescription}><span className={classes.bluecardtxt}>Course description: </span><br/><span className={classes.orangetxtcarddescription}>Descriere</span></p>

          </Typography>
        </CardContent>
      </Collapse>
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

export default RemedialCourses;
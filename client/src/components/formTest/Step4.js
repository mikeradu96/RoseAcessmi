import React from 'react';
import Button from '@material-ui/core/Button';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from "@material-ui/core/styles";
import '../form/form.css';

const useStyles = makeStyles((theme) => ({
    imgbtndown: {
        color: "white",
        background: "#FF8600",
        borderRadius: 25,
        float: "left",
      },
      mainpage: {
        minHeight: '62vh',
      }
    }));

export default function Step4() {
    const [view, setView] = React.useState('1');
    const classes = useStyles();
    const handleChange = (event, nextView) => {
      setView(nextView);
    };
    return (
<div className={classes.mainpage}>
            <div className="intro">
                <br/>
                <h3> Almost done!</h3>
                <h3> Now lets see how our schedule match! </h3>
            </div>
            <br/>
            <div className="scheduleSelect">
                <div className="monday">
                <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
                <Button className={classes.imgbtndown} variant="contained">
                MONDAY
                </Button>
                <ToggleButton value="1" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="2" aria-label="module">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="3" aria-label="quilt">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="4" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="5" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="monday">
                <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
                <Button className={classes.imgbtndown} variant="contained">
                TUESDAY
                </Button>
                <ToggleButton value="1" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="2" aria-label="module">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="3" aria-label="quilt">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="4" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="5" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="monday">
                <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
                <Button className={classes.imgbtndown} variant="contained">
                WEDNESDAY
                </Button>
                <ToggleButton value="1" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="2" aria-label="module">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="3" aria-label="quilt">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="4" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="5" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="monday">
                <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
                <Button className={classes.imgbtndown} variant="contained">
                THURSDAY
                </Button>
                <ToggleButton value="1" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="2" aria-label="module">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="3" aria-label="quilt">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="4" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="5" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="monday">
                <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
                <Button className={classes.imgbtndown} variant="contained">
                FRIDAY
                </Button>
                <ToggleButton value="1" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="2" aria-label="module">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="3" aria-label="quilt">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="4" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="5" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                </ToggleButtonGroup>
                </div>
                <div className="monday">
                <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
                <Button className={classes.imgbtndown} variant="contained">
                SATURDAY
                </Button>
                <ToggleButton value="1" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="2" aria-label="module">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="3" aria-label="quilt">
                <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="4" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                <ToggleButton value="5" aria-label="list">
                    <p>18:00-20:00</p>
                </ToggleButton>
                </ToggleButtonGroup>
                </div>
            </div>
</div>
    )
}
import React from 'react';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../form/form.css';
import { sizing } from '@material-ui/system';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    imgbtndown: {
        color: "white",
        background: "#FF8600",
        borderRadius: 25,
        float: "left",
      }
    
    }));

export default function Step5() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    return (
        <div className="step5"> 
            <div className="intro">
                <br/>
                <h3> <b>Congrats!</b> </h3>
                <h3> You finished the entire onboarding process! </h3>
                <h3> Just to be sure that we can contact you, help us with the last step. </h3>
            </div>
            <br/>
            <br/>
            <div className="step5Verification">
            <div className="step5Input">
                    <TextField
                                    placeholder="Verification Code"
                                    label="Verification Code"
                                    // onChange={handleChange('firstName')}
                                    // defaultValue={values.firstName}
                                    margin="normal"
                                    variant="outlined"
                                    style = {{width: '50%'}}
                                />
            </div>
            <br/>
            <h3 onClick={handleClickOpen}> <u>Send SMS again? </u> </h3>
            <FormControlLabel
        control={
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="I would like to receive ROSE ACCESMI updates regarding development opportunities."
      />
                  <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="I agree with the terms and conditions and privacy policy."
      />
            </div>
            
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Resend SMS</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your phone number:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone number"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            SEND
          </Button>
        </DialogActions>
      </Dialog>
      <div>
      <Button href="/" className={classes.imgbtndown} variant="contained">
                FINISH
      </Button>
      </div>

        </div>

    )
}
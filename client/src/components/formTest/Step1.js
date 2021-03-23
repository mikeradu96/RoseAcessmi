import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../form/form.css';
// import Social from '../pages/social.js'

export default function Step1() {
    return (
        <React.Fragment>

            <div className="step1Color">
                <div className="step1Container">
                    <div className="step1">
                        <div className="intro">
                            <h3> Help us discover you! </h3>
                            <h3> First, tell us your name and phone number. </h3>
                        </div>
                        <TextField
                            placeholder="Enter Your First Name"
                            label="First Name"
                            // onChange={handleChange('firstName')}
                            // defaultValue={values.firstName}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Last Name"
                            label="Last Name"
                            // onChange={handleChange('lastName')}
                            // defaultValue={values.lastName}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Phone Number"
                            label="Phone Number"
                            // onChange={handleChange('phoneNumber')}
                            // defaultValue={values.phoneNumber}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../form/form.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function Step2() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="step1Container">
                <div className="step1">
                    <div className="intro">
                        <h3> Nice to meet you !</h3>
                        <h3> We want to know more about you </h3>
                    </div>
                    <br />
                    <br />
                    <div className="intro">
                        <h3>How about a photo?</h3>
                    </div>
                    <br />
                    <div className="intro">
                        <div className={classes.root}>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </div>
                    </div>
                    <br />
                    <div >
                        <InputLabel id="demo-simple-select-label">Select language of study</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // onChange={handleChange('language')}
                            // defaultValue={values.language}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            placeholder="Select language of study"
                            label="Language of study"
                        >
                            <MenuItem value={1}>English </MenuItem>
                            <MenuItem value={2}>French</MenuItem>
                            <MenuItem value={3}>ETC</MenuItem>
                            <MenuItem value={4}>ETC</MenuItem>
                            <MenuItem value={5}>ETC I</MenuItem>
                            <MenuItem value={6}>ETC II</MenuItem>
                        </Select>
                    </div>
                    <TextField
                        placeholder="Year of study"
                        label="Year of study"
                        // onChange={handleChange('year')}
                        // defaultValue={values.email}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
import React from 'react';
import Background from '../form/Onboarding_3.png';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import '../form/form.css';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});

// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}


export default function Step3() {
    return (
        <div >
            <div className="step3Container">
                <div className="step3Backgound">
                    <img src={Background} />
                </div>
                <br />
                <div className="step3Paragraph">
                    <h6>Your response to this questionnaire are confidential and are used only to determine which ROSE ACCESMI activities would best improve your personal acacdemic development. With that in mind, please answer this questions as honestly as possible.</h6>
                </div>
            </div>
            <br />
            <div className="step3Form">
                <div >

                    <FormControl component="fieldset">
                        <FormLabel component="legend">When i have to learn new concepts of mathematics/physics:</FormLabel>
                        <RadioGroup defaultValue="1" aria-label="gender" name="customized-radios">
                            <FormControlLabel value="1" control={<StyledRadio />} label="I need someone`s help in order to understand them" />
                            <FormControlLabel value="2" control={<StyledRadio />} label="I spend a lot of time trying to understand, but i manage by myself." />
                            <FormControlLabel value="3" control={<StyledRadio />} label="I find them easy to understand" />
                            <FormControlLabel value="4" control={<StyledRadio />} label="I find them very easy to understand" />
                        </RadioGroup>
                        <br />
                        <FormLabel component="legend">When i have to learn new concepts of mathematics/physics:</FormLabel>
                        <RadioGroup defaultValue="1" aria-label="gender" name="customized-radios">
                            <FormControlLabel value="1" control={<StyledRadio />} label="I need someone`s help in order to understand them" />
                            <FormControlLabel value="2" control={<StyledRadio />} label="I spend a lot of time trying to understand, but i manage by myself." />
                            <FormControlLabel value="3" control={<StyledRadio />} label="I find them easy to understand" />
                            <FormControlLabel value="4" control={<StyledRadio />} label="I find them very easy to understand" />
                        </RadioGroup>
                        <br />
                        <FormLabel component="legend">When i have to learn new concepts of mathematics/physics:</FormLabel>
                        <RadioGroup defaultValue="1" aria-label="gender" name="customized-radios">
                            <FormControlLabel value="1" control={<StyledRadio />} label="I need someone`s help in order to understand them" />
                            <FormControlLabel value="2" control={<StyledRadio />} label="I spend a lot of time trying to understand, but i manage by myself." />
                            <FormControlLabel value="3" control={<StyledRadio />} label="I find them easy to understand" />
                            <FormControlLabel value="4" control={<StyledRadio />} label="I find them very easy to understand" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}
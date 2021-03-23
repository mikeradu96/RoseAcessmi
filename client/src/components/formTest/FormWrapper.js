import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import '../form/form.css';
// import PaymentForm from './PaymentForm';
// import Review from './Review';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    imgbtndown: {
        color: "white",
        background: "#FF8600",
        borderRadius: 25,
        float: "left",
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
      },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
        width: '70%',
        backgroundColor: '#e6fafc'
    },
    stepperNoBackground:{
        padding: theme.spacing(3, 0, 5),
        width: '70%',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    stepperContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'e6fafc',
    }
}));

const steps = ['', '', '', ''];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Step1
            // values={values}
            // handleChange={this.handleChange}
            />;
        case 1:
            return <Step2 />;
        case 2:
            return <Step3 />;
        case 3:
            return <Step4 />;
        case 4:
            return <Step5 />;
        default:
            throw new Error('Unknown step');
    }
}


export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    return (
        <div >
            <Paper className={classes.paper}>
                {getStepContent(activeStep)}
                
                <div className={`${activeStep!==3 ? "buttonContainer" :"buttonContainerNoBackground"}`}>
                   
                    <div className={classes.buttons}>
                        {activeStep < 4 &&  (
                            <Button onClick={handleBack} className={classes.imgbtndown}>
                                Back
                            </Button>
                        )}
                        <br/>
                        {activeStep < 4 &&  (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.imgbtndown}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        )}
                    </div>
                    
                    
                </div>
                <div className={`${activeStep!==3 ? "stepperContainer" : "stepperContainerNoBackground"}`}>
                    {activeStep !== 4    
                        ?<Stepper activeStep={activeStep} className={`${activeStep!==3 ? classes.stepper : classes.stepperNoBackground}`}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                        </Stepper>  
                        :<div></div> 
                    }
                   
                </div>
            </Paper>
        </div>
    );
}
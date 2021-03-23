import React from 'react';
import "../GlobalStyle.css";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Validator
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Rose Accesmi
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 25,
      position: 'relative',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 25,
        borderColor: '#2374AB',
      },
    },
  }))(InputBase);

  const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#2374AB'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#FF8600",
    color: 'white'
  },
  mainpage: {
    minHeight: '62vh',
  }
});

class ForgotPassword extends React.Component {
  state = {
    email: '',
  }

  handleChangeEmail = (event) => {
    const email = event.target.value;
    this.setState({ email });
  }
    render() {
      const { email } = this.state;
      const { classes } = this.props;
        return(
            <Container className={classes.mainpage} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Retrieve Password
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit} >
                <TextValidator
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={this.handleChangeEmail}
                value={email}
                name="email"
                errorMessages={['this field is required', 'Email is not valid']}
                validators={['required', 'isEmail']}
                autoComplete="email"
              />
              </ValidatorForm>
              </Grid>
              </Grid>
        </form>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Retrieve Password
          </Button>
        </div>
          </Container>
        )
    }
};
ForgotPassword.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(useStyles)(ForgotPassword);
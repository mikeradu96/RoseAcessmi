import React from 'react';
import "../GlobalStyle.css";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';

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
    body: {
      width: '100%',
      height: '100%'
    }
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#FF8600",
    color: 'white'
  },
  selectbox: {
    paddingBottom: 20,
  },
  slc: {
    width: 412,
    height: 56,
  },
  inputaccount: {
    transform: 'none !important',
  },
  selectordrp: {
    borderRadius: 25,
  },
  mainpage: {
    minHeight: '62vh',
  }
});

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChangeEmail = (event) => {
    const email = event.target.value;
    this.setState({ email });
  }

  handleChangePassword = (event) => {
    const password = event.target.value;
    this.setState({ password });
  }

  render() {
    const { classes } = this.props;
    const { email } = this.state;
    const { password } = this.state;
    return (
      <Container className={classes.mainpage} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form noValidate>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit} >
              <TextValidator
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={this.handleChangeEmail}
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'Email is not valid']}
                autoFocus
              />
              </ValidatorForm>
              <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit} >
              <TextValidator
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={this.handleChangePassword}
                value={password}
                id="password"
                validators={['required']}
                errorMessages={['this field is required']}
                autoComplete="current-password"
              />
            </ValidatorForm>
            <Box className={classes.selectbox}>
              <FormControl className={classes.slc}>
                <InputLabel className={classes.inputaccount} id="demo-customized-select-label">Select Account Type</InputLabel>
                <Select
                  value={'Student'}
                  className={classes.selectordrp}
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  input={<BootstrapInput />}
                >
                  <MenuItem value={'Student'}>Student</MenuItem>
                  <MenuItem value={'Mentor'}>Mentor</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  {"Forgot password?"}
              </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
        </Container>
    )
  }
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SignIn);

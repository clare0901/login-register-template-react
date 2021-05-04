import React from 'react';
import { Container, TextField, Button,FormHelperText } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import OutlinedInput from '@material-ui/core/OutlinedInput';

import {Form} from 'react-bootstrap'

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    withoutLabel: {
        marginTop: theme.spacing(3),

    },
    LinkStyle: {
        textDecoration: "None"
    },
    HeplerText:{
        color:"black"
    }
}));

function SignUp() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // form on submit
    const handleSubmit = (event) => { 
        event.preventDefault();
    }

    return (
        <Container maxWidth="sm" className="container">
            <LockIcon className="icon" style={{ display: "block" }} />
            <div className="login-title">Sign Up</div>

            <div className="login-details-div">
                <Form>
                    <FormControl fullWidth className={clsx(classes.withoutLabel)}>
                        <TextField
                            required
                            id="outlined-basic-name"
                            variant="outlined"
                            label="Name"
                            type="Name"
                            autoComplete="current-name"
                            aria-describedby="my-helper-text-name"
                        />

                    </FormControl>

                    <FormControl fullWidth className={clsx(classes.withoutLabel)}>
                        <TextField
                            required
                            id="outlined-basic-email"
                            variant="outlined"
                            label="Email"
                            type="Email"
                            autoComplete="current-email"
                            aria-describedby="my-helper-text-email"
                        />

                        <FormHelperText id="my-helper-text-email" className={clsx(classes.HeplerText)} >
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>

                    {/* PASSWORDS */}

                    <FormControl variant="outlined" fullWidth  className={clsx(classes.withoutLabel)}>
                        <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            autoComplete="current-password"
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={90}
                        />
                    </FormControl>
            
                    <Link to="/home" className={clsx(classes.LinkStyle)}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={clsx(classes.withoutLabel)}
                        >
                        Sign UP
                        </Button>
                    </Link>
                </Form>
            </div>
            
            <Link to="/sign-in">
                <p className="link">Already have an account ? Sign In</p>
            </Link>

        </Container>
    )
}

export default SignUp;
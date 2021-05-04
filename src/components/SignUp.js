import React, {useRef, useState} from 'react';
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

import { Form, Alert } from 'react-bootstrap'

// import { Link } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext'

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

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();

    // form on submit
    async function handleSubmit(event){
        console.log("submitting")
        event.preventDefault();

        if( passwordRef.current.value !== passwordConfirmRef.current.value ){
            return setError("Password do not match");
        }
        try {
            setLoading(true);
            setError("");
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch
        {
            setLoading(false);
            setError("Failed to Create Account");
        }
    }

    // styles
    const classes = useStyles();

    // password visiblity
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        ConfirmPassword: '',
        showConfirmPassword:false
    });

    const handleChange = (prop) => (event) => {
        setValues({ 
            ...values, 
            [prop]: event.target.value 
        });
    };

    const handleClickShowPassword = (prop) => {
        setValues({ 
            ...values, 
            showPassword: !values.showPassword 
        });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ 
            ...values, 
            showConfirmPassword: !values.showConfirmPassword 
        });
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <Container maxWidth="sm" className="container">
            <LockIcon className="icon" style={{ display: "block" }} />
            <div className="login-title">Sign Up</div>

            <div className="login-details-div">
                <Form onSubmit={handleSubmit}>
                    { error && <Alert outlined="danger">{error}</Alert>}
                    <FormControl fullWidth className={clsx(classes.withoutLabel)}>
                        <TextField
                            required
                            ref={emailRef}
                            id="outlined-basic-email"
                            variant="outlined"
                            label="Email"
                            type="email"
                            autoComplete="current-email"
                            aria-describedby="my-helper-text-email"
                        />

                        <FormHelperText id="my-helper-text-email" className={clsx(classes.HeplerText)} >
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>

                    {/* PASSWORDS */}

                    <FormControl variant="outlined" fullWidth className={clsx(classes.withoutLabel)}>
                        <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            ref={passwordRef}
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
                            
                    <FormControl variant="outlined" fullWidth className={clsx(classes.withoutLabel)}>
                        <InputLabel required htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            ref={passwordConfirmRef}
                            id="outlined-adornment-confirm-password"
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            value={values.ConfirmPassword}
                            autoComplete="current-confirm-password"
                            onChange={handleChange('ConfirmPassword')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={150}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={clsx(classes.withoutLabel)}
                    >
                    Sign UP
                    </Button>
                </Form>
            </div>
            
            {/* <Link to="/sign-in"> */}
                <p className="link">Already have an account ? Sign In</p>
            {/* </Link> */}

        </Container>
    )
}

export default SignUp;
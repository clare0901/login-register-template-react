import React, {useState} from 'react';
import { TextField, Button,FormHelperText } from "@material-ui/core";
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
import "bootstrap/dist/css/bootstrap.min.css"

import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext'

import '../App.scss'

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
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup ,currentUser} = useAuth();

    const history = useHistory();


    // styles
    const classes = useStyles();

    // password visiblity
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
        confirmPassword: '',
        showConfirmPassword:false
    });

    // form on submit
    async function handleSubmit(event){
        
        event.preventDefault();

        if( values.password !== values.confirmPassword ){
            return setError("Password do not match");
        }
        try {
            setError("");
            setLoading(true);
            await signup(values.email, values.password);
            history.push('/home')
        } catch(error)
        {
            // setError("Failed to Create Account");
            setError(error)
            console.log("Error=>",error)
        }
        setLoading(false);
    }

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
        <>
            <LockIcon className="login-icon" style={{ display: "block", fontSize:"3rem" }} />
            <div className="login-title">Sign Up</div>

            <div className="login-details-div">
            { error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    {/* {currentUser} */}
                    <FormControl fullWidth className={clsx(classes.withoutLabel)}>
                        <TextField
                            required
                            id="outlined-basic-email"
                            values={values.email}
                            variant="outlined"
                            type="email"
                            autoComplete="off"
                            aria-describedby="my-helper-text-email"
                            onChange={handleChange('email')}
                        />

                        <FormHelperText id="my-helper-text-email" className={clsx(classes.HeplerText)} >
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>

                    {/* PASSWORDS */}

                    <FormControl variant="outlined" fullWidth className={clsx(classes.withoutLabel)}>
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
                            
                    <FormControl variant="outlined" fullWidth className={clsx(classes.withoutLabel)}>
                        <InputLabel required htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-confirm-password"
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            autoComplete="current-confirm-password"
                            onChange={handleChange('confirmPassword')}
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
                        disabled={loading}
                        className={clsx(classes.withoutLabel)}
                    >
                    Sign UP
                    </Button>
                </Form>
            </div>
            
            <Link to="/sign-in">
                <p className="link">Already have an account ? Sign In</p>
            </Link>
        </>   

    )
}

export default SignUp;
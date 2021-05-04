import React from "react";
import { Container, Button } from "@material-ui/core";
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

// import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    withoutLabel: {
        marginTop: theme.spacing(3),
        
    },
    LinkStyle:{
        textDecoration:"None"
    }
}));
 

function Login() {

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

    return (
        <Container maxWidth="sm" className="container">
            <LockIcon className="icon" style={{ display: "block" }} />
            <div className="login-title">Sign In</div>

            <div className="login-details-div">
                <FormControl variant="outlined" fullWidth className={clsx(classes.withoutLabel)}>
                    <InputLabel required htmlFor="outlined-basic">Email</InputLabel>
                    <OutlinedInput
                        id="outlined-basic"
                        type="text"
                        labelWidth={60}
                    />
                </FormControl>

                <FormControl variant="outlined" fullWidth  className={clsx(classes.withoutLabel)}>
                    <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
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
            </div>

            <Link to="/home" className={clsx(classes.LinkStyle)}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={clsx(classes.withoutLabel)}
                >
                Submit
                </Button>
            </Link>
            
            {/* <Link to="/sign-up"> */}
                <p className="link">Don't have an account ? Sign Up</p>
            {/* </Link> */}

        </Container>
    );
}

export default Login;
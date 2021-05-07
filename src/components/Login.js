import React, {useState} from "react";
import '../App.scss';
import { Button } from "@material-ui/core";
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
import { Link,useHistory } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
    withoutLabel: {
        marginTop: theme.spacing(3),

    },
    LinkStyle: {
        textDecoration: "None"
    }
}));


function Login() {

    const {login} = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();
    const classes = useStyles();

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    async function handleSubmit(event){
        event.preventDefault();

        try {
            setLoading(true)
            await login(values.email, values.password)
            history.push('/home')
        } catch {
            setLoading(false)
            setError("Couldn't Log In")
        }
    }

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
        <>
            <LockIcon className="login-icon" style={{ display: "block", fontSize:"3rem" }} />
            <div className="login-title">Sign In</div>

            <div className="login-details-div">
            { error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>

                    <FormControl variant="outlined" fullWidth className={clsx(classes.withoutLabel)}>
                        <InputLabel required htmlFor="outlined-basic">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-basic"
                            type="text"
                            values={values.email}
                            onChange={handleChange('email')}
                            autoComplete="off"
                            labelWidth={60}
                        />
                    </FormControl>

                    <FormControl variant="outlined" fullWidth className={clsx(classes.withoutLabel)}>
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        className={clsx(classes.withoutLabel)}
                    >
                    Submit
                    </Button>
                </Form>
            </div>

            <Link to="/sign-up">
                <p className="link">Don't have an account ? Sign Up</p>
            </Link>
        </>
    );
}

export default Login;
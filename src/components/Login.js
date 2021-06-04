import React, { useState, useEffect } from "react";
import "../App.scss";
import {
  Button,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControl,
  Input
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { Form, Alert, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  LinkStyle: {
    textDecoration: "None",
  },
  Label: {
    marginLeft: theme.spacing(-1.8)
  }
}));

function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    document.title = "Log In"
  }, [])

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(values.email, values.password);
      history.push("/");
    } catch {
      setError("Couldn't Log In");
    }
    setLoading(false);
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
      <div
        className="main_bg d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px"}}>
          <Card className="card" style={{ opacity: "0.8"}} >
            <Card.Body>
              <LockIcon
                className="login-icon"
                style={{ display: "block", fontSize: "3rem" }}
              />
              <div className="login-title">Log In</div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={clsx(classes.withoutLabel)}
                >
                  <InputLabel required htmlFor="outlined-basic" className={clsx(classes.Label)}>
                    Email
                  </InputLabel>
                  <Input
                    id="outlined-basic"
                    type="text"
                    values={values.email}
                    onChange={handleChange("email")}
                    autoComplete="off"
                  />
                </FormControl>

                <FormControl
                  variant="outlined"
                  fullWidth
                  className={clsx(classes.withoutLabel)}
                >
                  <InputLabel required htmlFor="outlined-adornment-password" className={clsx(classes.Label)}>
                    Password
                  </InputLabel>
                  <Input
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
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
              <Link to="/forgot-password">
                <p className="link">Forgot Password ?</p>
              </Link>
              <Link to="/sign-up">
                <p className="link">Don't have an account ? Sign Up</p>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;

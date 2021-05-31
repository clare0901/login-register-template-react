import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form, Alert, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../App.scss";

const useStyles = makeStyles((theme) => ({
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  LinkStyle: {
    textDecoration: "None",
  },
  HeplerText: {
    color: "black",
  },
}));

function UpdateProfile() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, updatePassword, updateEmail } = useAuth();

  const history = useHistory();

  // styles
  const classes = useStyles();

  // password visiblity
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
  });

  // form on submit
  function handleSubmit(event) {
    event.preventDefault();

    if (values.password !== values.confirmPassword) {
      return setError("Password do not match");
    }

    const promises = [];
    if (values.email !== currentUser.email) {
      promises.push(updateEmail(values.email));
    }

    if (values.password) {
      promises.push(updatePassword(values.password));
    }

    setError("");
    setLoading(true);

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        // console.log(error)
        setError("Failed to update");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const handleClickShowPassword = (prop) => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        className=" bg d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card className="card" style={{ opacity: "0.6"}}>
            <Card.Body>
              <div className="login-title">Update Profile</div>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                {/* {currentUser} */}
                <FormControl fullWidth className={clsx(classes.withoutLabel)}>
                  <TextField
                    required
                    id="outlined-basic-email"
                    values={values.email}
                    label="Email"
                    variant="outlined"
                    type="email"
                    autoComplete="off"
                    onChange={handleChange("email")}
                    defaultValue={currentUser.email}
                  />
                </FormControl>

                {/* PASSWORDS */}

                <FormControl
                  variant="outlined"
                  fullWidth
                  className={clsx(classes.withoutLabel)}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    autoComplete="current-password"
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
                    labelWidth={90}
                  />
                </FormControl>

                <FormControl
                  variant="outlined"
                  fullWidth
                  className={clsx(classes.withoutLabel)}
                >
                  <InputLabel htmlFor="outlined-adornment-confirm-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-confirm-password"
                    type={values.showConfirmPassword ? "text" : "password"}
                    value={values.confirmPassword}
                    autoComplete="current-confirm-password"
                    onChange={handleChange("confirmPassword")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
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
                  Update
                </Button>
              </Form>
              <Link to="/">
                <p className="link">Cancel</p>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;

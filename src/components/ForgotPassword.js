import React, { useState } from "react";
import "../App.scss";
import {
  Button,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Form, Alert, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  LinkStyle: {
    textDecoration: "None",
  },
}));

function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(values.email);
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <div
        className="main_bg d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card className="card" style={{ opacity: "0.8"}}>
            <Card.Body>
              <div className="login-title">Reset Password</div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={clsx(classes.withoutLabel)}
                >
                  <InputLabel required htmlFor="outlined-basic">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    type="text"
                    values={values.email}
                    onChange={handleChange("email")}
                    autoComplete="off"
                    labelWidth={60}
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
              <Link to="/sign-in">
                <p className="link">Back to Login Page</p>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;

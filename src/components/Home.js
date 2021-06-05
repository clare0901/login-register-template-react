import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button, Paper } from "@material-ui/core";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import "../App.scss";

const useStyles = makeStyles((theme) => ({
  Paper: {
    padding: theme.spacing(3),
    opacity:'0.5'
  },
  Profile: {
    marginBottom: '20px'
  }
}));

function Home() {
  const { currentUser, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  // styles
  const classes = useStyles();

  useEffect(() => {
    document.title = "Home";
  }, []);

  async function handleLogout() {
    setError("");
    try {
      setLoading(true);
      await logout();
      history.push("/sign-in");
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError("Failed to Log Out");
    }
  }

  return (
    <div className="bg">
      <Nav />
      <div className="d-flex align-items-center justify-content-center">
        <div
          className="w-100"
          style={{ maxWidth: "400px", fontSize: "18px", color: "white" }}
        >
          <Paper elevation={3} className={clsx(classes.Paper)} id="paper">
            <h1 className={clsx(classes.Profile)}>My Profile</h1>
            <strong className="mr-1">Email: </strong>
            <span>{currentUser.email}</span>
            {error && <Alert variant="danger">{error}</Alert>}

            <Link to="/update-profile">
              <p>Update Profile</p>
            </Link>
          </Paper>

          <Button
            disabled={loading}
            onClick={handleLogout}
            fullWidth
            variant="contained"
            color="primary"
            id="logout_button"
            className="w-25 mt-4 "
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;

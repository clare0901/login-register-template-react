import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// put all your routes in the main js file
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            {/* only if the user is logged in */}
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

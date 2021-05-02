import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'

// put all your routes in the main js file

function App() {
  return (
    <Router>
      <Switch>
        {/* exact is where it looks exactly for "/" */}
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={Login} />
      </Switch>
    </Router>

  );
}

export default App;

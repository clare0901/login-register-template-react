import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from './components/Login'
// import Home from './components/Home'
import SignUp from './components/SignUp'
import { AuthProvider } from './contexts/AuthContext';

// put all your routes in the main js file

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;


// {/* <Router>
//   <Switch>
//     {/* exact is where it looks exactly for "/" */}
//     <Route path="/" exact component={Login} />
//     <Route path="/home" component={Home} />
//     <Route path="/sign-up" component={SignUp} />
//     <Route path="/sign-in" component={Login} />
//   </Switch>
// </Router> */}
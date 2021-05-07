import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import { AuthProvider } from './contexts/AuthContext';
import { Container } from 'react-bootstrap'

// put all your routes in the main js file

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center" style={{ width:"40%", minHeight:"100vh" }}
    >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
    </Container>
  );
}

export default App;

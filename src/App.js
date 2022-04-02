import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
<<<<<<< HEAD
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
=======
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
<<<<<<< HEAD
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
=======
            <Route path="/appointment">
              <Appointment />
            </Route>
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

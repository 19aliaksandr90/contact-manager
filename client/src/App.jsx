import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import ContactState from './context/contacts/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <AuthState>
    <ContactState>
      <AlertState>
        <Router>
          <Navbar title="Contact Keeper" icon="fas fa-id-card-alt" />
          <div className="container">
            <Alerts />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </ContactState>
  </AuthState>
);

export default App;

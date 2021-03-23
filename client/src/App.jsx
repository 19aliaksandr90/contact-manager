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

import './App.css';

const App = () => (
  <AuthState>
    <AlertState>
      <ContactState>
        <Router>
          <Navbar title="Contact Keeper" icon="fas fa-id-card-alt" />
          <div className="container">
            <Alerts />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </AlertState>
  </AuthState>
);

export default App;

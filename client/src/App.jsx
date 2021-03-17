import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';

import './App.css';

const App = () => (
  <Router>
    <Navbar title="Contact Keeper" icon="fas fa-id-card-alt" />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
    My App
  </Router>
);

export default App;

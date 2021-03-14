import React from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import DetailRoom from './components/DetailRoom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/room/:id" component={DetailRoom} />
      </Switch>
    </Router>
  );
}

export default App;

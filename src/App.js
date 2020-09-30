import React from 'react';

import './App.css';

import Home from './Pages/Home';
import Pokemon from './Pages/Pokemon';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:pokemonId" component={Pokemon} />
      </Switch>
    </div>
  );
}

export default App;

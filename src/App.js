import React from 'react';

import './App.css';

import Home from './Pages/Home';
import Pokemon from './Pages/Pokemon';
import Error from './Pages/Error';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:pokemonId" component={Pokemon} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

import Landing from './comp/landing';
import Redirect from './comp/redirect';
import Header from './comp/header';

function App() {
  return ( <div className="App">
    <main>
      <Switch>
        <Route exact="exact" path="/" component={Landing}/>
        <Route path="/redirect" component={Redirect}/>
      </Switch>
    </main>
  </div> );
}

export default App;

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Instructions from './containers/Instructions'
import BlinkTest from './containers/BlinkTest'
import { NavLink } from 'react-router-dom'
import './styles/_app.scss';
import './lib/cursor.js'



const App = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <div className="nav-bar">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/instructions" activeClassName="instructions-nav">
          Instructions
        </NavLink>
        <NavLink to="/blink" activeClassName="blink-nav">
          Blink Test
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/instructions" component={Instructions} />
        <Route exact path="/blink" component={BlinkTest} />
      </Switch>
    </div>
  );
}


export default App;

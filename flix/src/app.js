import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import {Home, Signup, Signin, Browse} from './pages';

export default function App() {
  return (

    <Router>

      <Route exact path="./browse">
        <Browse/>
      </Route>
      
      <Route exact path="./signin">
        <Signin/>
       </Route>

      <Route exact path="./signup">
        <Signup/>
      </Route>

      <Route exact path={ROUTES.HOME}>
        <Home/>
      </Route>
    
    </Router>
  );
}



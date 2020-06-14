import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Cart from '../components/Cart';
import Login from '../components/Login';


export default function Routes() {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/cart' component={Cart} />
           <Route path='/login' component={Login} />
       </Switch>
    )
}

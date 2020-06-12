import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Cart from '../components/Cart';


export default function Router() {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/cart' component={Cart} />
       </Switch>
    )
}

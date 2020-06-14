import React, { Component } from 'react'
import Header from './Header'
import Routes from '../routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FoodDeliveryApp extends Component {
    render() {
        return (
            <div style={{"backgroundColor":"#f2e9eb"}}>
                <Header />
                <Routes/>
            </div>
        )
    }
}

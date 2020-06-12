import React, { Component } from 'react'
import Router from '../routes/router'
import Navbar from './Navbar'

export default class FoodDeliveryApp extends Component {
    render() {
        return (
            <div>
                Food Delivery App
                <Navbar />
                <Router/>
            </div>
        )
    }
}

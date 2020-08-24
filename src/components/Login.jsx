import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import { logOut, logAdminIn, logUserIn } from "../redux/action";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: '',
            invalid: false
        }

    }

    handleSubmit = e => {
        e.preventDefault();

        const { userDetails, logAdminIn, logUserIn, history, cart } = this.props
        const { name, password } = this.state
        
        let invalid = true

        for(let user of userDetails){
            if(user.name === name && user.password === password){
                if(name === "admin")
                    logAdminIn()
                else
                    logUserIn()
                if(cart.length)
                    history.push('/cart')
                else
                    history.push('/')
                invalid = false
            }
        }
        if(invalid) 
            this.setState({
                invalid: true
            })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            invalid: false
        });
    };

    render() {
        const { userLoggedIn, adminLoggedIn, logOut } = this.props

        if(userLoggedIn || adminLoggedIn){
            logOut()
            return <Redirect to='/' />
        }

        return (
            <>
                <h1>LOGIN</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit">
                        Login
                    </button>
                </form>
                {this.state.invalid && <h5 className='text-danger'>INVALID CREDENTIALS</h5>}
            </>
        )
    }
}

const mapStateToProps = state => ({
    adminLoggedIn: state.adminLoggedIn,
    userLoggedIn: state.userLoggedIn,
    userDetails: state.userDetails,
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    logOut : () => dispatch(logOut()), 
    logUserIn : () => dispatch(logUserIn()),
    logAdminIn : () => dispatch(logAdminIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
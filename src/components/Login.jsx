import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: ''
        }

    }

    handleSubmit = e => {
        e.preventDefault();
    };


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <>
                <h1>Login</h1>
                <form>
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
            </>
        )
    }
}

export default Login;
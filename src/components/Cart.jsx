import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

function Cart(props) {
    const { userLoggedIn, cart } = props
    if(!userLoggedIn)
        return <Redirect to='/login' />
    return (
        <>
        {cart.map(item => <div>{item.food_name}</div>)}
        </>
    )
}
const mapStateToProps = state => ({
    userLoggedIn : state.userLoggedIn,
    cart: state.cart
})

export default connect(mapStateToProps,null)(Cart)
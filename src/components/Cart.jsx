import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Cart(props) {
    const { userLoggedIn, cart, selected } = props
    
    let totalCartValue = 0
    let uniqueIds = Object.keys(selected)
    
    let duplicateSelected = {...selected}
    for(let cartItem of cart){
        totalCartValue+= cartItem.price
    }
    
    console.log(uniqueIds, cart)


    if(!userLoggedIn)
        return <Redirect to='/login' />
    if(!cart.length)
        return <div>Cart is Empty</div>
    else return (
        <>
            {cart.map(item => {

                if(duplicateSelected[item.id] >= 1){
                    var n = duplicateSelected[item.id]
                    duplicateSelected[item.id] = 0
                return <div>{item.food_name} {n} *{item.price * n}</div>
                }
                else
                return null
           
            })}

            <Button variant="outline-success">Check Out {totalCartValue}</Button>
        </>
    )
}
const mapStateToProps = state => ({
    userLoggedIn : state.userLoggedIn,
    cart: state.cart,
    selected: state.selected
})

export default connect(mapStateToProps,null)(Cart)
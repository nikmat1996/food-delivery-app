import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

        const { userLoggedIn, cart, selected } = this.props
    
        let totalCartValue = 0
        let uniqueIds = Object.keys(selected)
        
        let duplicateSelected = {...selected}
        for(let item of cart){
            totalCartValue += item.price
        }

        if(!userLoggedIn)
            return <Redirect to='/login' />
        if(!cart.length)
            return <div>Cart is Empty</div>
        else return(
            <div>
                <>
                    {cart.map(item => {

                        if(item.id in duplicateSelected){
                            var n = duplicateSelected[item.id]
                            delete duplicateSelected[item.id]
                            return <div>{item.food_name} {n} *{item.price * n}</div>
                        }
                        else
                        return null
                
                    })}

                    <Button variant="outline-success">Check Out {totalCartValue}</Button>
                </>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userLoggedIn : state.userLoggedIn,
    cart: state.cart,
    selected: state.selected
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps,null)(Cart)

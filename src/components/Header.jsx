import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'
import { connect } from 'react-redux'

function Header(props) {
    const { userLoggedIn, adminLoggedIn, cart } = props
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link className=" nav-link text-secondary" to="/">FOOD DELIVERY APP</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {!adminLoggedIn? null :<Link className="mr-4 nav-link" to="/allDetails">S T A T S</Link>}
                {!adminLoggedIn? null :<Link className="mr-4 nav-link" to="/add">A D D</Link>}
                {!userLoggedIn? null :<Link className="mr-4 nav-link" to="/orders">O R D E R S</Link>}
                {adminLoggedIn? null :<Link className="mr-4 nav-link" to="/cart">{cart.length ? `C A R T + ${cart.length}` : 'C A R T'}</Link>}
                <Link className=" nav-link" to="/login">{userLoggedIn || adminLoggedIn ?'L O G O U T' :'L O G I N'}</Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


const mapStateToProps = state => ({
    adminLoggedIn: state.adminLoggedIn,
    userLoggedIn: state.userLoggedIn,
    cart: state.cart
})

export default connect(mapStateToProps,null)(Header)
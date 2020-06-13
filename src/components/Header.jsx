import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'

export default function Header(props) {
    const userLoggedIn = false
    const adminLoggedIn = false
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/">FOOD DELIVERY APP</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {!adminLoggedIn? null :<Link className="mr-5" to="/allDetails">STATS</Link>}
                {!adminLoggedIn? null :<Link className="mr-5" to="/add">ADD RESTAURANT</Link>}
                {!userLoggedIn? null :<Link className="mr-5" to="/orders">ORDERS</Link>}
                {adminLoggedIn? null :<Link className="mr-5" to="/cart">CART</Link>}
                <Link className="mr-5" to="/log">{userLoggedIn || adminLoggedIn ?'LOGOUT' :'LOGIN'}</Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

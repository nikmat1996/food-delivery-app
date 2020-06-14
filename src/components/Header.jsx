import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'

export default function Header(props) {
    const userLoggedIn = false
    const adminLoggedIn = false
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link className="ml-5 nav-link text-secondary" to="/">FOOD DELIVERY APP</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {!adminLoggedIn? null :<Link className="mr-5 nav-link" to="/allDetails">STATS</Link>}
                {!adminLoggedIn? null :<Link className="mr-5 nav-link" to="/add">ADD RESTAURANT</Link>}
                {!userLoggedIn? null :<Link className="mr-5 nav-link" to="/orders">ORDERS</Link>}
                {adminLoggedIn? null :<Link className="mr-5 nav-link" to="/cart">CART</Link>}
                <Link className="mr-5 nav-link" to="/log">{userLoggedIn || adminLoggedIn ?'LOGOUT' :'LOGIN'}</Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

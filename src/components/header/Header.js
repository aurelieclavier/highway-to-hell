import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./Navbar.css";


const Example = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Navbar color="faded" light>
                <img className='navbar-img' src={logo} alt='' />
                <NavbarBrand href="/" className="titleNav">HIGHWAY TO HELL</NavbarBrand>
                <NavbarToggler className="btnBurger" onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed}>
                    <Nav className="burgerNav">
                        <NavItem className="burgerNav">
                            <NavLink href="/Movies">Movies</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Example;
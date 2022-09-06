import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import logo from '../../assets/Logo.png'
import { Link } from "react-router-dom"
import '../NavBar/NavBar.css'
import CartWidget from "../CartWidget/CartWidget.jsx"


const NavBar = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);

    

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
        <Nav tabs>
            
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
            <Link to="/">Productos</Link>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem enabled ><NavLink href='/'>Yerba</NavLink></DropdownItem>
                <DropdownItem enabled><NavLink href='/'>Stevia</NavLink></DropdownItem>
                <DropdownItem enabled><NavLink href='/'>Te</NavLink></DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <NavItem>
            <NavLink href='/Blog'>Blog</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href='/Contacto'>Contacto</NavLink>
            </NavItem>
            <CartWidget />
        </Nav>
        
    <div>
        
        
    </div>
    </div>
    )
}

export default NavBar;
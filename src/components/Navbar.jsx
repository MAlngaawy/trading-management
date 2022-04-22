import React from 'react'
import logo from '../Trade.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar p-5">
            <div className="container flex justify-between">
                <div className="logo">
                    <img src={logo} alt="Test" />
                </div>
                <ul className="links flex items-center">
                    <li className="mx-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-4">
                        <Link to="/customers">Customers</Link>
                    </li>
                    <li className="mx-4">
                        <Link to="add-customer">+ Add Customer</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

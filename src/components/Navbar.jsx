import React from 'react'
import logo from '../Trade.svg'

const Navbar = () => {
    return (
        <nav className="navbar p-5">
            <div className="container flex justify-between">
                <div className="logo">
                    <img src={logo} alt="Test" />
                </div>
                <ul className="links flex items-center">
                    <li className="mx-4">Home</li>
                    <li className="mx-4">Customers</li>
                    <li className="mx-4">+ Add Customer</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

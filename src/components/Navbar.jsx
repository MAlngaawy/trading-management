import React, { useState } from 'react'
import logo from '../Trade.svg'
import cn from 'classnames'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <nav className="navbar p-5 bg-white">
            <div className="container flex justify-between">
                <div className="logo">
                    <img src={logo} alt="Test" />
                </div>
                <div
                    className="menu sm:hidden flex items-center"
                    onClick={() => setShowNav(true)}
                >
                    Menu
                </div>
                <ul
                    className={cn(
                        'links',
                        'absolute',
                        'sm:relative',
                        'h-screen',
                        'w-screen',
                        'sm:h-auto',
                        'sm:w-auto',
                        'bg-white',
                        'flex',
                        'flex-col',
                        'sm:flex-row',
                        'items-center',
                        'justify-center',
                        'left-0',
                        'z-10',
                        'transform',
                        'translate-x-none',
                        'transition-all',
                        { ' -translate-x-full sm:transform-none': !showNav }
                    )}
                >
                    <span
                        onClick={() => setShowNav(false)}
                        className=" absolute top-4 right-4 sm:hidden"
                    >
                        Close Nav
                    </span>
                    <li className="m-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="m-4">
                        <Link to="/customers">Customers</Link>
                    </li>
                    <li className="m-4">
                        <Link to="add-customer">+ Add Customer</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

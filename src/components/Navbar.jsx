import React, { useState } from 'react'
import logo from '../Trade.svg'
import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    // Access the pathname
    const location = useLocation().pathname

    const [showNav, setShowNav] = useState(false)
    return (
        <nav className="navbar p-5 bg-white">
            <div className="container flex justify-between">
                <div className="logo">
                    <img src={logo} className="h-6 w-28" alt="Test" />
                </div>
                <div
                    className="menu sm:hidden flex items-center"
                    onClick={() => setShowNav(true)}
                >
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    <FontAwesomeIcon icon={faBars} />
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
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    <Item
                        name="Home"
                        link="/"
                        setShowNav={() => setShowNav()}
                        location={location}
                    />
                    <Item
                        name="Customers"
                        link="/customers"
                        setShowNav={() => setShowNav()}
                        location={location}
                    />
                    <Item
                        name="+ Add Customers"
                        link="/add-customer"
                        setShowNav={() => setShowNav()}
                        location={location}
                    />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

const Item = ({ name, link, setShowNav, location }) => {
    return (
        <li
            onClick={() => setShowNav(false)}
            className={cn('m-4', { 'font-bold': location === link })}
        >
            <Link to={link}>{name}</Link>
        </li>
    )
}

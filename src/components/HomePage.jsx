import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const HomePage = () => {
    return (
        <div className="home bg-main py-20">
            <div className="container">
                <p className="text-lg">Hello This is Home Component</p>
                <Link to="/customers">
                    <Button text="Click To Go To Customers Page" />
                </Link>
            </div>
        </div>
    )
}

export default HomePage

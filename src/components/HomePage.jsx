import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const HomePage = () => {
    return (
        <div>
            <p className="text-lg">Hello This is Home Component</p>
            <Link to="/customers">
                <Button text="Click To Go To Customers Page" />
            </Link>
        </div>
    )
}

export default HomePage

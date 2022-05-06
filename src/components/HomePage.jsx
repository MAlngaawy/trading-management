import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const HomePage = () => {
    return (
        <div className="home py-28">
            <div className="container">
                <h2 className=" text-4xl leading-normal md:text-6xl md:leading-normal">
                    The way to manage your <br />
                    <span className="text-white">Trading stratub</span>
                </h2>
                <Link to="/customers">
                    <Button
                        type="main"
                        className="font-semibold text-2xl px-10 my-10 transform hover:scale-105 transition-all"
                        text="Go To the customers"
                    />
                </Link>
            </div>
        </div>
    )
}

export default HomePage

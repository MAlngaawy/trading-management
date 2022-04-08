import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Customers from './components/customers'
import { Routes, Route, Link } from 'react-router-dom'
import Button from './components/Button'

import './App.css'

const CUSTOMERS = gql`
    query getCustomers {
        customers {
            data {
                id
                attributes {
                    name
                    debt
                }
            }
        }
    }
`

function App() {
    const { loading, error, data } = useQuery(CUSTOMERS)

    if (loading) return <p>Loading ....</p>
    if (error) return <p>error ....</p>

    if (data) {
        console.log(data.customers.data)
    }

    // The Returned Doms
    return (
        <div className="App">
            <h1 className="text-2xl text-main block border-b-2">
                Welcome From The Appjs File
            </h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/customers"
                    element={
                        <Customers data={data ? data.customers.data : []} />
                    }
                />
            </Routes>
        </div>
    )
}

export default App

const Home = () => {
    return (
        <div>
            <p className="text-lg">Hello This is Home Component</p>
            <Link to="/customers">
                <Button text="Click To Go To Customers Page" />
            </Link>
        </div>
    )
}

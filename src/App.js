import React, { useEffect, useState, useRef } from 'react'
import { useQuery, gql } from '@apollo/client'
import Customers from './components/customers'

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
            <h1>Test From App.js</h1>
            <Customers data={data ? data.customers.data : []} />
        </div>
    )
}

export default App

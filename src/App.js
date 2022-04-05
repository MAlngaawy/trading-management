import React, { useEffect, useState, useRef } from 'react'
import { useQuery, gql } from '@apollo/client'

import './App.css'

const CUSTOMERS = gql`
    query getCustomers {
        customers {
            data {
                attributes {
                    name
                }
            }
        }
    }
`

function App() {
    const [loading, error, data] = useQuery(CUSTOMERS)

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    // if (loading) return <p>Loading ....</p>
    // if (error) return <p>error ....</p>

    // if (data) {
    //     console.log(data)
    // }

    // The Returned Doms
    return <div className="App"> Lolo </div>
}

export default App

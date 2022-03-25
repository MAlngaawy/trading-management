import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [content, setContent] = useState([])
    const [customers, setCustomers] = useState([])

    // Use Effect to fetch data from the API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setContent(json))
            .then(console.log(content))
    }, [])

    // Use Effect to fetch data from my strapi API
    useEffect(() => {
        fetch('https://mo-strapi-playground.herokuapp.com/customers')
            .then((res) => res.json())
            .then((json) => setCustomers(json))
            .then(console.log(customers))
    }, [])

    return (
        <div className="App">
            Fetch The customers Data
            <ol>
                {customers.map((customer) => {
                    return <li>{customer.customer_name}</li>
                })}
            </ol>
        </div>
    )
}

export default App

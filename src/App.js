import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
    // const [content, setContent] = useState([])
    // const [customers, setCustomers] = useState([])
    const [test, setTest] = useState([])
    const [res, setRes] = useState()
    const ids = []

    // Use Effect to fetch data from the API
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((json) => setContent(json))
    //         .then(console.log(content))
    // }, [])

    // Use Effect to fetch data from my strapi API
    // useEffect(() => {
    //     fetch('https://mo-strapi-playground.herokuapp.com/customers')
    //         .then((res) => res.json())
    //         .then((json) => setCustomers(json))
    //         .then(console.log(customers))
    // }, [])

    // fetch from company data test
    useEffect(() => {
        fetch(
            'http://localhost:1337/api/customers?fields=name%2Cdebt&populate=seller'
        )
            .then((res) => res.json())
            .then((data) => setTest(data.data))
            .then(console.log(test))
    }, [])

    // useEffect(() => {
    //     // POST request using fetch inside useEffect React hook
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             data: { name: 'Test from Post', debt: 100500 },
    //         }),
    //     }
    //     fetch('http://localhost:1337/api/customers', requestOptions)
    //         .then((response) => response.json())
    //         .then((data) => setRes(data))
    //         .then(console.log(res))
    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, [])

    const deleteAll = (data) => {
        for (const el of data) {
            fetch(`http://localhost:1337/api/customers/${el}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }).then(console.log('DONE'))
        }
    }

    return (
        <div className="App">
            Fetch The customers Data
            <button onClick={() => deleteAll(ids)}>Delete All</button>
            <ol>
                {test.map(({ id, attributes: { name, debt } }) => {
                    ids.push(id)
                    console.log(ids)
                    return (
                        <li key={id}>
                            {name} <span>{debt}</span>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default App

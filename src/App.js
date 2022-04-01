import React, { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState([])
    const nameRef = useRef('Fill It')
    const debtRef = useRef('Num It')

    useEffect(() => {
        console.log(data.length)
    }, [data])

    // fetch Data unction
    const fetchData = () => {
        console.log('fetchData')
        fetch('http://localhost:1337/api/customers')
            .then((res) => res.json())
            .then(({ data }) => setData(data))
    }

    // Delete customer functio
    const daleteCusto = (id) => {
        console.log('deleteCusto')
        fetch(`http://localhost:1337/api/customers/${id}`, {
            method: 'DELETE',
        }).then((res) => fetchData())
    }

    // Add Customer Function
    const addCusto = (name, debt) => {
        console.log(name, debt)
        fetch('http://localhost:1337/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: { name: name, debt: debt },
            }),
        })
            .then(() => fetchData())
            .then(() => {
                nameRef.current.value = ''
                debtRef.current.value = ''
            })
    }

    // The Returned Doms
    return (
        <div className="App">
            {/* Buttom To Fetch Data */}
            <button
                onClick={() => fetchData()}
                className="p-4 bg-cyan-600 text-white cursor-pointer hover:scale-125 transform transition-all text-sm font-bold"
            >
                Show Customers
            </button>

            {/* Inputs to POST data */}
            <div className="add">
                <input
                    ref={nameRef}
                    className="border-2 my-4"
                    type="text"
                    aria-label="name"
                />
                <input
                    className="border-2"
                    type="number"
                    aria-label="number"
                    ref={debtRef}
                />
                <button
                    onClick={() =>
                        addCusto(nameRef.current.value, debtRef.current.value)
                    }
                    className="bg-gray-500 p-4 my-4 rounded-xl text-white  "
                >
                    add customer
                </button>
            </div>

            {/* Un Orderd List for showing Data */}
            <ul>
                {data.length == 0
                    ? 'Lol'
                    : data.map(({ id, attributes }) => {
                          return (
                              <li
                                  key={id}
                                  className="my-4 flex justify-around align-middle text-sm"
                              >
                                  <p className="inline-block">
                                      {attributes.name}
                                  </p>
                                  <p className="inline-block">
                                      {attributes.debt}
                                  </p>
                                  <button
                                      onClick={() => daleteCusto(id)}
                                      className="p-1 h-14 bg-red-500 rounded-sm text-white cursor-pointer hover:scale-110 transform transition-all text-sm font-bold"
                                  >
                                      delete this customer
                                  </button>
                              </li>
                          )
                      })}
            </ul>
        </div>
    )
}

export default App

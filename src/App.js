import React, { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState([])
    const [newCust, setNewCust] = useState({})

    useEffect(() => {
        console.log(data.length)
    }, [data])

    const fetchData = () => {
        console.log('fetchData')
        fetch('http://localhost:1337/api/customers')
            .then((res) => res.json())
            .then(({ data }) => setData(data))
    }

    const daleteCusto = (id) => {
        console.log('deleteCusto')
        fetch(`http://localhost:1337/api/customers/${id}`, {
            method: 'DELETE',
        }).then((res) => fetchData())
    }

    const addCusto = (name, debt) => {
        console.log('addCusto')
        fetch('http://localhost:1337/api/customers', {
            method: 'POST',
            body: {
                name,
                debt,
            },
        })
    }

    return (
        <div className="App">
            <h1 className="bg-main text-white p-4 inline-block rounded-md hover:scale-150 cursor-pointer transition-all transform  text-3xl font-bold underline">
                Hello world!
            </h1>
            <h1 className=" font-bold underline">Hello world!</h1>
            <button
                onClick={() => fetchData()}
                className="p-4 bg-cyan-600 text-white cursor-pointer hover:scale-125 transform transition-all text-sm font-bold"
            >
                Show Custmorea
            </button>
            <div className="add">
                <input
                    className="border-2 my-4"
                    type="text"
                    aria-label="name"
                />
                <input className="border-2" type="number" aria-label="number" />
                <button className="bg-gray-500 p-4 my-4 rounded-xl text-white  ">
                    add customer
                </button>
            </div>
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

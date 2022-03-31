import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(data.length)
    }, [data])

    const fetchData = () => {
        console.log('Clicked')
        fetch('http://localhost:1337/api/customers')
            .then((res) => res.json())
            .then(({ data }) => setData(data))
    }

    return (
        <div className="App">
            <h1 className=" font-bold underline">Hello world!</h1>
            <button
                onClick={() => fetchData()}
                className="p-4 bg-cyan-600 text-white cursor-pointer hover:scale-125 transform transition-all text-sm font-bold"
            >
                Show Custmorea
            </button>
            <ul>
                {data.length == 0
                    ? 'Lol'
                    : data.map(({ id, attributes }) => {
                          return (
                              <li
                                  key={id}
                                  className="flex justify-around align-middle"
                              >
                                  <p className="inline-block">
                                      {attributes.name}
                                  </p>
                                  <p className="inline-block">
                                      {attributes.debt}
                                  </p>
                                  <button className="p-4 bg-red-500 rounded-sm text-white cursor-pointer hover:scale-110 transform transition-all text-sm font-bold">
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

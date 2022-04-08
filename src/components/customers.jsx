import React from 'react'
import { Link } from 'react-router-dom'

function Customers({ data }) {
    return (
        <div>
            <ul>
                {data.length == 0
                    ? 'Lol'
                    : data.map(({ id, attributes }) => {
                          return (
                              <SigleCustomer id={id} attributes={attributes} />
                          )
                      })}
            </ul>
            <Link
                to="/"
                className="m-4 bg-main text-white p-4 text-sm rounded-sm"
            >
                back to Home
            </Link>
        </div>
    )
}

export default Customers

const SigleCustomer = ({ id, attributes }) => {
    return (
        <li
            key={id}
            className="my-4 hover:bg-gray-400 hover:text-white flex justify-around align-middle text-sm border-2 p-2"
        >
            <p className="inline-block text-lg">{attributes.name}</p>
            <p className="flex items-center text-lg">{attributes.debt}</p>
        </li>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Customers({ data }) {
    return (
        <div>
            <ul>
                {data.length === 0
                    ? 'Lol'
                    : data.map(({ id, attributes }) => {
                          return (
                              <SigleCustomer
                                  key={id}
                                  id={id}
                                  attributes={attributes}
                              />
                          )
                      })}
            </ul>
            <Link to="/">
                <Button text="Back To Home" type="main" />
            </Link>
        </div>
    )
}

export default Customers

const SigleCustomer = ({ id, attributes }) => {
    return (
        <Link to={id}>
            <li className="my-4 hover:bg-gray-400 hover:text-white flex justify-around align-middle text-sm border-2 p-2">
                <p className="inline-block text-lg">{attributes.name}</p>
                <p className="flex items-center text-lg">{attributes.debt}</p>
            </li>
        </Link>
    )
}

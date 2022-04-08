import React from 'react'

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
        </div>
    )
}

export default Customers

const SigleCustomer = ({ id, attributes }) => {
    return (
        <li
            key={id}
            className="my-4 hover:bg-gray-400 hover:text-white flex justify-around align-middle text-sm border-2 p-4"
        >
            <p className="inline-block text-2xl">{attributes.name}</p>
            <p className="flex items-center text-2xl">{attributes.debt}</p>
        </li>
    )
}

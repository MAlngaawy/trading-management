import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import API from '../API'
import Table from './Table'

function Customers() {
    const [fetchedData, seFetchedData] = useState([])
    useEffect(() => {
        fetch(`${API}/api/customers`)
            .then((res) => res.json())
            .then((data) => seFetchedData(data.data))
        console.log('Effect From Customers')
    }, [])

    return (
        <div className="customers bg-white">
            <div className="container">
                <Link to="/">
                    <Button text="Back To Home" type="main" />
                </Link>
                {fetchedData.length > 0 ? (
                    <Table fetchedData={fetchedData} />
                ) : (
                    'Lol'
                )}
                {/* <ul>
                    {fetchedData.map(({ id, attributes }) => {
                        return (
                            <SigleCustomer
                                key={id}
                                id={id}
                                attributes={attributes}
                            />
                        )
                    })}
                    <Link to="/add-customer">
                        <Button
                            text="+ add Customer"
                            className="bg-red-500 w-full mx-0 font-bold"
                        />
                    </Link>
                </ul> */}
            </div>
        </div>
    )
}

export default Customers

const SigleCustomer = ({ id, attributes }) => {
    const deleteCustomer = (id) => {
        fetch(`${API}/api/customers/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => console.log(res.json()))
    }

    return (
        <div>
            <Link to={id}>
                <li className="my-4 hover:bg-gray-400 hover:text-white flex justify-around align-middle text-sm border-2 p-2">
                    <p className="inline-block text-lg">{attributes.name}</p>
                    <p className="flex items-center text-lg">
                        {attributes.debt}
                    </p>
                </li>
            </Link>
            <Button
                onClickFun={() => {
                    deleteCustomer(id)
                }}
                text="delete"
                className="bg-red-700 text-white p-2 "
            />
        </div>
    )
}

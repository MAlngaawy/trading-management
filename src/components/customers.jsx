import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useQuery, gql } from '@apollo/client'

const CUSTOMERS = gql`
    query getCustomers {
        customers {
            data {
                id
                attributes {
                    name
                    debt
                    phone
                    address
                }
            }
        }
    }
`

function Customers() {
    const { loading, error, data } = useQuery(CUSTOMERS)
    useEffect(() => {
        console.log('Effect From Customers')
    }, [data])

    if (loading) return <p>Loading ....</p>
    if (error) return <p>error ....</p>

    if (data) {
        console.log(data.customers.data)
    }
    return (
        <div>
            <Link to="/">
                <Button text="Back To Home" type="main" />
            </Link>
            <ul>
                {data.customers.data.length === 0
                    ? 'Lol'
                    : data.customers.data.map(({ id, attributes }) => {
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
            </ul>
        </div>
    )
}

export default Customers

const SigleCustomer = ({ id, attributes }) => {
    const deleteCustomer = (id) => {
        console.log('Test')
        fetch(`http://localhost:1337/api/customers/${id}`, {
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

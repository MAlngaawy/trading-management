import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const SINGLECUSTOMER = gql`
    query getCustomers($id: ID!) {
        customer(id: $id) {
            data {
                id
                attributes {
                    name
                    debt
                }
            }
        }
    }
`

const CustomerInfo = () => {
    const { id } = useParams()

    const { loading, error, data } = useQuery(SINGLECUSTOMER, {
        variables: { id },
    })
    console.log(error, loading, data)

    if (loading) return <p>Loading ....</p>
    if (error) return <p>error ....</p>

    return (
        <div>This is Customer Name is {data.customer.data.attributes.name}</div>
    )
}

export default CustomerInfo

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useQuery, gql } from '@apollo/client'

// const SINGLECUSTOMER = gql`
//     query getCustomers($id: String!) {
//         customers(id: $id) {
//             data {
//                 id
//                 attributes {
//                     name
//                     debt
//                 }
//             }
//         }
//     }
// `

const CustomerInfo = () => {
    const [data, setData] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        console.log('From CustoInfo')
        fetch(`http://localhost:1337/api/customers/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [])

    // const { loading, error, data } = useQuery(SINGLECUSTOMER, {
    //     variables: { id },
    // })

    // if (loading) return <p>Loading ....</p>
    // if (error) return <p>error ....</p>

    // if (data) {
    //     console.log(data.customers.data)
    // }

    if (!data) return <h1>Loadin</h1>

    return <div> This is Customer Name is {data.attributes.name} </div>
}

export default CustomerInfo

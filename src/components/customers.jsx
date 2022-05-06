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
    }, [])

    return (
        <div className="customers bg-white pt-10">
            <div className="container">
                <Link to="/add-customer" className="bg-main p-1">
                    <Button
                        text="+"
                        className="text-xl text-secondGray p-0 font-bold"
                    />
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

// const SigleCustomer = ({ id, attributes }) => {
//     const deleteCustomer = (id) => {
//         fetch(`${API}/api/customers/${id}`, {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' },
//         })
//     }

//     return (
//         <div>
//             <Link to={id}>
//                 <li className="my-4 hover:bg-gray-400 hover:text-white flex justify-around align-middle text-sm border-2 p-2">
//                     <p className="inline-block text-lg">{attributes.name}</p>
//                     <p className="flex items-center text-lg">
//                         {attributes.debt}
//                     </p>
//                 </li>
//             </Link>
//             <Button
//                 onClickFun={() => {
//                     deleteCustomer(id)
//                 }}
//                 text="delete"
//                 className="bg-red-700 text-white p-2 "
//             />
//         </div>
//     )
// }

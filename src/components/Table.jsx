import React, { useState } from 'react'
import { useTable } from 'react-table/dist/react-table.development'
import API from '../API'
import Button from './Button'
import Popup from './global/Popup'
import CustomerInfo from './CustomerInfo'

const Table = ({ fetchedData }) => {
    const [showWarning, setShowWorning] = useState(false)
    const [singleCustomer, setSingleCustomer] = useState(0)
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'Debt',
                accessor: 'debt',
            },
            {
                Header: 'Phone',
                accessor: 'phone',
            },
        ],
        []
    )

    const deleteFun = (id) => {
        fetch(`${API}/api/customers/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => window.location.reload())
    }

    const data = fetchedData.map((el) => {
        return {
            name: el.attributes.name,
            debt: el.attributes.debt,
            phone: el.attributes.phone,
            id: el.id,
        }
    })

    const tableInstance = useTable({ columns, data })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance

    return (
        <div>
            {singleCustomer > 0 && (
                <CustomerInfo
                    theID={singleCustomer}
                    closePopup={() => setSingleCustomer(0)}
                />
            )}
            <table {...getTableProps()} className="w-full font-inter">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="bg-mainGray text-secondGray text-left pl-8 py-4 font-normal "
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                            <th className="bg-mainGray text-secondGray text-left pl-8 py-4 font-normal ">
                                Action
                            </th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr
                                onClick={() =>
                                    setSingleCustomer(row.original.id)
                                }
                                {...row.getRowProps()}
                                className="border-b hover:bg-mainGray"
                            >
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="py-4 pl-8"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                                {/* Custom td for delete button */}
                                <td
                                    // onClick={() => deleteFun(row.original.id)}
                                    onClick={() => setShowWorning(true)}
                                    className="py-4 pl-8 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer"
                                >
                                    delete
                                </td>
                                {showWarning ? (
                                    <Warning
                                        deleteIt={() => {
                                            deleteFun(row.original.id)
                                            setShowWorning(false)
                                        }}
                                        close={() => setShowWorning(false)}
                                        name={row.original.name}
                                    />
                                ) : (
                                    ''
                                )}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table

const Warning = ({ name, close, deleteIt }) => {
    return (
        <Popup>
            <h2 className="text-center px-3 text-l">
                are you sure you want to delete {name}
            </h2>
            <div className="actions mt-10">
                <Button
                    onClickFun={() => {
                        deleteIt()
                    }}
                    text="Yes Delete"
                    className="bg-red-600 text-white"
                />
                <Button
                    onClickFun={() => {
                        close()
                    }}
                    text="Cansel"
                    className="text-black p-0 m-8"
                />
            </div>
        </Popup>
    )
}

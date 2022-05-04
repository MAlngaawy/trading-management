import React, { useMemo } from 'react'
import { useTable } from 'react-table/dist/react-table.development'
import API from '../API'

const Table = ({ fetchedData }) => {
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
        console.log(id)
        fetch(`${API}/api/customers/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => window.location.reload())
    }

    const data = fetchedData.map((el) => {
        console.log('EL', el.id)
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
                                {' '}
                                Action{' '}
                            </th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr
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
                                    onClick={() => deleteFun(row.original.id)}
                                    className="py-4 pl-8 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer"
                                >
                                    {' '}
                                    delete{' '}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table

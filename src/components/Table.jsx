import React, { useEffect, useState, useMemo } from 'react'
import { useTable } from 'react-table/dist/react-table.development'

const Table = ({ fetchedData }) => {
    console.log(fetchedData)
    // const data = React.useMemo(
    //     () => [
    //         {
    //             name: 'Momo',
    //             debt: '20000',
    //             phone: '01125963258',
    //         },
    //     ],
    //     []
    // )

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

    const data = fetchedData.map((el) => {
        return {
            name: el.attributes.name,
            debt: el.attributes.debt,
            phone: el.attributes.phone,
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table

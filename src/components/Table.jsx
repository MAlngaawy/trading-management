import React, { useEffect, useState, useMemo } from 'react'
import { useTable } from 'react-table/dist/react-table.development'

const Table = () => {
    const data = React.useMemo(
        () => [
            {
                col1: 'Momo',
                col2: '20000',
                col3: '01125963258',
            },
            {
                col1: 'Ali',
                col2: '10000',
                col3: '0100002558',
            },
            {
                col1: 'Omar',
                col2: '50000',
                col3: '01555596',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Debt',
                accessor: 'col2',
            },
            {
                Header: 'Phone',
                accessor: 'col3',
            },
        ],
        []
    )

    const tableInstance = useTable({ columns, data })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance
    return (
        <div>
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="bg-main text-black border-2 border-black"
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
                                className=" bg-black text-white border-2 border-black hover:bg-slate-500"
                            >
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="px-14 py-2 border-2 border-white"
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

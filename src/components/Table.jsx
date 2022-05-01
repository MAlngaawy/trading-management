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
                                            className="pr-14 pl-4 py-2"
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

import React, { useState } from 'react';
import { useTable } from 'react-table';

const EditDemo = () => {
    // Data yang akan ditampilkan dalam tabel
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Kevin Brown', age: 23 },
    ]);

    // Kolom-kolom yang ada
    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id', // Nama kolom
            },
            {
                Header: 'Nama',
                accessor: 'name',
                Cell: ({ row, value }) => (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => handleEditCell(row.index, 'name', e.target.value)}
                    />
                ),
            },
            {
                Header: 'Usia',
                accessor: 'age',
                Cell: ({ row, value }) => (
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => handleEditCell(row.index, 'age', e.target.value)}
                    />
                ),
            },
        ],
        [data]
    );

    // Fungsi untuk menangani perubahan dalam sel
    const handleEditCell = (rowIndex, columnId, value) => {
        const updatedData = data.map((row, index) => {
            if (index === rowIndex) {
                return {
                    ...row,
                    [columnId]: value,
                };
            }
            return row;
        });
        setData(updatedData);
    };

    // Membuat tabel menggunakan React Table
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <table {...getTableProps()} style={{ border: '1px solid black' }}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default EditDemo;

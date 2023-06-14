import React, { useState } from "react";

const data = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "555-555-5555",
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "555-555-5555",
    },
    {
        id: 3,
        name: "Mike Smith",
        email: "mike.smith@example.com",
        phone: "555-555-5555",
    },
];

const Table = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="container p-4 mx-auto">
                <div className="relative w-full max-w-md">
                    <div className="absolute top-0 left-0 pt-2 pl-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 border-collapse dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="p-3 font-medium text-gray-600 uppercase border border-gray-300">
                                    Name
                                </th>
                                <th className="p-3 font-medium text-gray-600 uppercase border border-gray-300">
                                    Email
                                </th>
                                <th className="p-3 font-medium text-gray-600 uppercase border border-gray-300">
                                    Phone
                                </th>
                                <th className="p-3 font-medium text-gray-600 uppercase border border-gray-300">
                                    Estado
                                </th>
                                <th className="p-3 font-medium text-gray-600 uppercase border border-gray-300">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item) => (
                                <tr key={item.id}>
                                    <td className="p-3 border border-gray-300">
                                        {item.name}
                                    </td>
                                    <td className="p-3 border border-gray-300">
                                        {item.email}
                                    </td>
                                    <td className="p-3 border border-gray-300">
                                        {item.phone}
                                    </td>
                                    <td className="p-3 border border-gray-300">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                                            Online
                                        </div>
                                    </td>
                                    <td className="p-3 border border-gray-300">
                                        <div className="grid grid-cols-2 gap-4">
                                            <a href="">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                    />
                                                </svg>
                                            </a>
                                            <a href="">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Table;

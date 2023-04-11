import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavber = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                        <Link to="/admin/addproduct">
                            <button className="inline-flex items-center mx-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Add new Product </button>
                        </Link>

                        <Link to="/admin/eaditproduct">
                            <button className="inline-flex items-center mx-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Eadit Product details </button>
                        </Link>

                        <Link to="/admin/adminorders">
                            <button className="inline-flex items-center mx-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> See Orders </button>
                        </Link>

                    </nav>

                </div>
            </header>
        </div>
    )
}

export default AdminNavber
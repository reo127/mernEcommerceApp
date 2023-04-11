import React, { useState } from 'react';
import { useGetOrdersQuery, useUpdateOrderMutation, useDeleteOrderMutation } from '../reduxToolKit/services/userAPI';

const AdminOrders = () => {
    const [deleteOrder] = useDeleteOrderMutation();
    const [modal, setModal] = useState(false);
    const [orderId, setOrderId] = useState("")
    const { data } = useGetOrdersQuery()
    console.log(data);
    return (
        <div>
            <div>
                <div className="">
                    {modal && <EaditModal setModal={setModal} orderId={orderId} />}
                    <fieldset className="w-full space-y-1 text-gray-800 flex justify-center">
                        <label htmlFor="Search" className="hidden">Search</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-32 min-w-[20rem] py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-blue-600" />
                        </div>
                    </fieldset>

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 lg:px-16 py-24 lg:py-16 mx-auto  ">
                            <div className="flex flex-wrap -m-4 ease-in-out cursor-pointer ">

                                {data ? data.orders.map((orders, i) => {
                                    
                                    return (
                                        <div className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out rounded-lg" key={i}>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> {orders.catagory}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium"> {orders.productName} </h2>
                                                <p className="mt-1"> {orders.userName}</p>
                                                <p className="mt-1">{orders.amount}</p>
                                                <p className="mt-1">+91 {orders.phoneNumber}</p>
                                                <p className="mt-1"> 54rohanmalo@gmail.com </p>
                                                <p className="mt-1">{orders.address} - {orders.state} - {orders.zip}</p>
                                                <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold uppercase">{orders.status}</span>
                                                <p className="mt-1"> {orders.createdAt} </p>
                                            </div>
                                            <button type="button" className="px-5 py-1 font-semibold rounded-xl mt-2 bg-red-600 text-gray-100 mr-3"
                                                onClick={() => { deleteOrder(orders._id) }}
                                            >DELETE</button>

                                            <button type="button" className="px-5 py-1 font-semibold rounded-xl mt-2 bg-yellow-400 text-gray-100"
                                                onClick={() => {
                                                    setOrderId(orders._id)
                                                    setModal(true)
                                                }}
                                            >EADIT</button>
                                        </div>
                                    )
                                }) : "no data"}

                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex justify-center space-x-1 text-gray-800 mb-12">
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-50 text-blue-600 border-blue-600">1</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100" title="Page 2">2</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100" title="Page 3">3</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100" title="Page 4">4</button>
                    <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}


const EaditModal = ({ setModal, orderId }) => {
    const [updateOrder] = useUpdateOrderMutation();
    const [status, setStatus] = useState("ORDERED")

    const handleUpdate = () => {
        updateOrder({status, orderId})
        setModal(false)
    }
    return (
        <div className="fixed right-0 z-10 sm:right-[32vw] flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-2xl sm:py-8 sm:px-12 bg-gray-50 text-gray-800">
            <p><b>{orderId}</b></p>
            <button className="absolute top-2 right-2" onClick={() => setModal(false)} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                    <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                </svg>
            </button>
            <form action="" className="space-y-12 ng-untouched ng-pristine ng-valid " encType="multipart/form-data">
                <div className="space-y-2">
                    <div className="flex">
                        <div>
                        </div>
                        <div className='ml-2'>
                            <select className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                            >
                                <option selected value="ORDERED">ORDERED</option>
                                <option value="SHIPPED" >SHIPPED</option>
                                <option value="DELIVERED" >DELIVERED</option>
                                <option value="CANCELLED" >CANCELLED</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50" onClick={() => handleUpdate()} >Update product</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdminOrders
import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useGetProfileQuery, useOrderdMutation } from '../reduxToolKit/services/userAPI';

const CheckOut = () => {
    const [count, setCount] = useState(0)
    const location = useLocation()
    let productId = location.pathname.split('/').slice(-1)[0]


    const [orderd] = useOrderdMutation()
    const { data } = useGetProfileQuery()
    console.log(data);

    const handleOrder = (e) => {
        e.preventDefault()
        orderd({productId, count})
    }

    return (
        <section>
            <h1 className="sr-only">Checkout</h1>

            <div className="mx-auto  max-w-screen-2xl ">
                <div className="bg-white py-12 md:py-24">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">
                        <form className="grid grid-cols-6 gap-4">
                            <div className="col-span-3">
                                <label htmlFor="Name" className="block text-xs font-medium text-gray-700">
                                    Name
                                </label>

                                <input type="text" id="FirstName" disabled className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" value={data?.user.name} />
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="phone" className="block text-xs font-medium text-gray-700"> Phone
                                </label>

                                <input type="tel" id="LastName" disabled className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" value={data?.user.phone} />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                                    Email
                                </label>
                                <input type="email" id="Email" disabled className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" value={data?.user.email} />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                    Address
                                </label>

                                <input type="text" id="Phone" disabled className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" value={data?.user.address} />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                    State
                                </label>

                                <input type="text" id="Phone" disabled className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" value={data?.user.state} />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                    Zip
                                </label>

                                <input type="text" id="Phone" disabled className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" value={data?.user.zip} />
                            </div>


                            <div>
                                <div className="flex items-center gap-1">
                                <label htmlFor="Quantity" className="block text-xs font-medium text-gray-700"> Quantity </label>
                                    <input type="number" id="Quantity" className="w-24 h-10 border-gray-200 rounded sm:text-sm ml-2"
                                    onChange={e => setCount( e.target.value)}
                                    value={count}
                                     />
                                </div>
                            </div>



                            <div className="col-span-6">
                                <button
                                    className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                    onClick={handleOrder}
                                >
                                    Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckOut
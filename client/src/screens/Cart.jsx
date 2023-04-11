import React from 'react'
import { Link } from 'react-router-dom'
import { useGetProfileQuery, useDeleteCartMutation } from '../reduxToolKit/services/userAPI';

const Cart = () => {
    // TODO:Itrate all cart in the cart page
    // TODO:Delete cart api Created But need to intrigrate
    const [deleteCart] = useDeleteCartMutation();
    const { data } = useGetProfileQuery()
    console.log(data?.user.cart);

    return (
        <>
            <div>
                <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                    <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                        <div className="flex md:flex-row flex-col justify-end" id="cart">
                            <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                <Link to="/" className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                    <p className="text-sm pl-2 leading-none">Back</p>
                                </Link>
                                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">CART</p>


                                {data ? data?.user.cart.map((cart, i) => (
                                    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200" key={i}>
                                        {/* <div className="w-1/4">
                                            <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png" alt="proudctImage" className="w-full h-full object-center object-cover" />
                                        </div> */}

                                        <div className="md:pl-3 md:w-3/4">
                                            <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{cart.catagory}</p>
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800"> {cart.name} </p>
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">{cart.description}</p>
                                            <p className="w-96 text-xs leading-3 text-gray-600 mt-4">Only {cart.stock} left</p>
                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                                                    onClick={() => deleteCart(cart._id)}
                                                    >Remove</p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800"> ₹{cart.price} </p>
                                            </div>
                                        </div>
                                    </div>
                                )) : "Loading..."}





                            </div>
                            <div className="xl:w-1/2  w-full bg-gray-100 bg-gradient-to-r from-sky-500 to-indigo-500 h-[100vh] sm:flex items-center justify-center hidden">
                            
                            <div className=" md:w-4/5 w-4/5 bg-gray-100 bg-[url('https://images.unsplash.com/photo-1553531889-56cc480ac5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=50')] bg-no-repeat bg-center h-[80vh] rounded-xl shadow-2xl cursor-pointer hover:translate hover:scale-105 transition-all ease-in-out"></div>

                            
                                {/* <img src="https://images.unsplash.com/photo-1553531889-56cc480ac5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=50" alt="cart iamge" /> */}
                                {
                                        // TODO: In future i make this working but for now it will be only an image   ------------------------------------>
                                        /* <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">$9,000</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                                <p className="text-base leading-none text-gray-800">$30</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Tax</p>
                                                <p className="text-base leading-none text-gray-800">$35</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
                                            </div>
                                            <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Checkout
                                            </button>
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style>

            </style>
        </>
    )
}

export default Cart

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGetProductQuery, useAddToCartMutation } from '../reduxToolKit/services/userAPI';



const Product = () => {
    const location = useLocation()
    let productId = location.pathname.split('/').slice(-1)[0];

    const { data } = useGetProductQuery(productId);
    const [addToCart] = useAddToCartMutation();

console.log(data);

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-16 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`http://localhost:8000/${data?.product.photos[0].path}`} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{data?.product.catagory}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data?.product.name}</h1>
                            <div className="flex mb-4">


                            </div>
                            <p className="leading-relaxed">{data?.product.description}</p>

                            <div className="flex mt-12">
                                <span className="mr-4 title-font font-medium text-2xl text-gray-900">₹{data?.product.price}</span>
                                <div className='flex items-center justify-center'>
                                    <Link to={`/checkout/${productId}`}><button className="flex  ml-auto mx-2 text-white bg-[#FF9F00] border-0 py-2 px-6 focus:outline-none hover:bg-[#ffac27] rounded font-bold">BUY</button></Link>
                                    <button className="flex  ml-auto mx-2 text-white bg-[#FF9F00] border-0 py-2 px-6 focus:outline-none hover:bg-[#ffac27] rounded font-bold"
                                    onClick={() => {addToCart(productId)}}
                                    >ADD TO CART</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Product
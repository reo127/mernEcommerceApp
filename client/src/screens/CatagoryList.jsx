import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useGetProductByCatagoryQuery } from '../reduxToolKit/services/userAPI';


const CatagoryList = () => {
    const location = useLocation()
    let catagoryName = location.pathname.split('/').slice(-1)[0]


    const { data, isSuccess } = useGetProductByCatagoryQuery(catagoryName);
    console.log(isSuccess && data);




    return (
        <div>
           <section className="text-gray-600 body-font">
                <div className="container lg:px-20 py-24 mx-auto ">
                    <div className="flex flex-wrap -m-4 ease-in-out">

                        {isSuccess && data.catagoryProduct.map((product, i) => {
                            return (
                                <Link to={`/product/${product._id}`} className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out" key={i} >
                                    <div className="block relative h-48 rounded overflow-hidden" >
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={`http://localhost:8000/${product?.photos[0].path}`} />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                        <p className="mt-1">{product.price}</p>
                                    </div>
                                </Link>
                            )
                        })}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default CatagoryList;
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import { useGetAllProductQuery } from '../reduxToolKit/services/userAPI';

const Home = () => {
  const { data, isSuccess } = useGetAllProductQuery();
  // console.log(isSuccess && data.allProduct);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container lg:px-20 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4 ease-in-out">

            {isSuccess && data.allProduct.map((product, i) => {
              return (
                <Link to={`/product/${product._id}`} className="lg:w-1/4 sm:w-1/2 p-4 w-full hover:shadow-customShadow ease-in-out" key={i} >
                  <div className="block relative h-48 rounded overflow-hidden" >
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={(product?.photos.length > 0) && `http://localhost:8000/${product?.photos[0].path}`} />
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
      <Footer />
    </>
  )
}

export default Home
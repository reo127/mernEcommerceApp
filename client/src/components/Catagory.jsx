import React from "react";
import { Link } from "react-router-dom";

const Catagory = () => {
  return (
    // <div>
    //     <div className="flex items-center justify-around flex-wrap shadow-lg">
    //         <Link to='/catagorylist/electronic'> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link>
    //         <Link to='/catagorylist/sports'> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link>
    //         <Link to='/catagorylist/toys'> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link>
    //         <Link to='/catagorylist/clothes '> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link>
    //         <Link to='/catagorylist/fashion'> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link>
    //     </div>
    // </div>

    <div className="max-w-[100vw] px-4 mx-auto py-4 md:py-0 dark:text-white">
      <div className="my-4">
        <div className="grid gap-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              className="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              key={category.title}
              to={`/catagorylist/${category.href}`}
            >
              <img
                className="h-20 w-20"
                src={category.image}
                alt={category.title}
              />
              <div className="font-bold mt-4 text-center">{category.title}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="md:hidden flex items-center justify-center mt-8 font-medium uppercase text-gray-500">
        All Categories
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="ml-1 w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

const categories = [
  {
    title: "Books",
    href: "books",
    image:
      "https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Best-Reviewed-Books.jpeg",
  },
  {
    title: "Fashion",
    href: "fashion",
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/c12afc017e6f24cb.png",
  },
  {
    title: "Electronics",
    href: "electronic",
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/69c6589653afdb9a.png",
  },
  {
    title: "Clothes",
    href: "clothes",
    image:
      "https://www.thespruce.com/thmb/u4AElq2mgfqj4QTUtEGVxUu9ioA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/folding-hacks-that-save-major-closet-and-drawer-space-3017373-Dress-Shirt-6d2d719c13f443a0a47733a26b9d7644.jpg",
  },
  {
    title: "Beauty, Toys & More",
    href: "toy",
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/dff3f7adcf3a90c6.png",
  },
];

export default Catagory;

import React from 'react'
import { Link } from 'react-router-dom';
import image from "../assets/images/1.jpg";

const Catagory = () => {
    return (
        <div>
            <div className="flex items-center justify-around flex-wrap shadow-lg">
                <Link to='/catagorylist/electronic'> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link> 
                <Link to='/catagorylist/sprots'> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link> 
                <Link to='/catagorylist/toys'> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link> 
                <Link to='/catagorylist/clothes '> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link> 
                <Link to='/catagorylist/fashion'> <img src={image} alt="CatagoryImAGE" className='lg:w-28 w-20 rounded-lg m-2' /> </Link> 
            </div>
        </div>
    )
}

export default Catagory
import React from 'react';
import { Link } from "react-router";
import { MdError } from "react-icons/md";

const NoItemsFound = () => {
    return (
        <div className='flex flex-col items-center gap-6 justify-center min-h-[80vh]'>
            <MdError size={154} fill='red' /> 
            <p className='text-3xl text-gray-400'>No recipes found</p>
            <Link to={"/add-recipes"} className="btn bg-[#A8F1FF] border-none text-black" > Add Recipe </Link>
        </div>
    );
};

export default NoItemsFound;
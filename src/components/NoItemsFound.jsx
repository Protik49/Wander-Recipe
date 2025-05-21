import React from 'react';
import { MdError } from "react-icons/md";

const NoItemsFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[80vh]'>
            <MdError size={154} fill='red' /> 
            <p className='text-3xl text-gray-400'>No recipes found</p>
        </div>
    );
};

export default NoItemsFound;
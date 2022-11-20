import React from 'react';

const Paginations = ({totalPost, postPage, paginate}) => {
    const pageNumber = [];
    for (let i = 1; i < Math.ceil(totalPost / postPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div className='flex justify-center my-10'>
            <div className='flex space-x-1'>
                {pageNumber.map((number, index) => (
                    <div key={index} className=' py-1 px-2 border border-blue-500 cursor-pointer' onClick={() => paginate(number)}>
                        {number}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Paginations;
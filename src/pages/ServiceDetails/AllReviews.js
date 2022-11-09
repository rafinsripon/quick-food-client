import React from 'react';

const AllReviews = ({reviews}) => {
    const {photo, message, image, email, name, price, rating, serviceName } = reviews;
    return (
        <div>
            <div className=''>
            <div className='border-b-2 border-gray-600'>
                <img className='w-12 h-12 rounded-full border-2 border-sky-700' src={photo} alt="" />
                
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            <div>
                <img src={image} alt="" />
                <div className=''>
                    <h2>{serviceName}</h2>
                    <p>{rating}</p>
                </div>
            </div>
            <div>
                <p>{message}</p>
            </div>
            </div>
        </div>
    );
};

export default AllReviews;
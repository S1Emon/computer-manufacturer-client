import React from 'react';

const Part = ({ part }) => {
    const { name, img, details, price, available, quantity } = part;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className='w-96 h-64' src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Description: {details}</p>
                <p>Minimum Order: {quantity}</p>
                <p>Available Quantity: {available}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;
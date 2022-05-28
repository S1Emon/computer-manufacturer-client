import React from 'react';

const Service = ({ service }) => {
    const { name, details, img } = service;
    return (
        <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
            <figure className='px-5 pt-2'><img className='w-96 h-56' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{details}</p>
                {/* <div class="card-actions justify-center">
                    <button class="btn btn-primary">Book Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Service;
import React from 'react';

const Service = ({ service }) => {
    const { name, details, img } = service;
    return (
        <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
            <figure className='px-5 pt-2'><img className='w-96 h-56' src={img} alt="Images" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className='items-center text-center'>
                    <button className="btn bg-accent-focus btn-sm btn-wide text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
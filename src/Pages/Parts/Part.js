import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, details, price, available, quantity } = part;

    const navigate = useNavigate();

    const handleNavigate = id => {
        navigate(`/parts/${id}`);
    }
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
                <div>
                    <button className="btn btn-outline-primary w-100" onClick={() => handleNavigate(_id)}>Update Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;
import React from 'react';

const NewInfoCard = ({ newItem }) => {
    const { name, img, details } = newItem;
    return (
        <div className="card bg-base-200
        lg:card-side shadow-xl mb-5">
            <figure><img className='w-40 h-36 ' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default NewInfoCard;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BuyingModal from './BuyingModal';

const BuyNow = () => {
    const { partsId } = useParams();
    const [part, setPart] = useState({});
    const [buyPart, setBuyPart] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/part/${partsId}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [partsId])

    return (
        <div className='container'>
            <h1>Buy Now : {partsId}</h1>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='w-64 h-48 rounded-xl' src={part?.img} alt="Parts" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{part?.name}</h2>
                    <p>Price: ${part?.price}</p>
                    <p>Description: <small>{part?.details}</small></p>
                    <p>Minimum Order: {part?.quantity}</p>
                    <p>Available Quantity: {part?.available}</p>
                    <div>
                        <label for="buying-modal" className="btn bg-accent-focus text-white"
                            onClick={() => setBuyPart(part)}>Buy Now</label>
                    </div>
                </div>
                {buyPart && <BuyingModal buyPart={buyPart} setBuyPart={setBuyPart}></BuyingModal>}
            </div>
        </div>
    );
};

export default BuyNow;
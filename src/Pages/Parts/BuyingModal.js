import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';

const BuyingModal = ({ buyPart, setBuyPart }) => {
    const { _id, name, quantity, available, price } = buyPart;
    const [user] = useAuthState(auth);

    const handleBuying = event => {
        event.preventDefault();
        const order = event.target.order.value;
        const phone = event.target.phone.value;
        const buying = {
            buyPartId: _id,
            buyPart: name,
            customerName: user.displayName,
            email: user?.email,
            phone: phone,
            quantity: order,
            price: price * order
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buying)
        })
            .then(res => res.json())
            .then(data => {
                if (!data.success) {
                    toast.success(`Your order is placed ${name}`)
                }
                else {
                    toast.error(`Error to Placed ${name}`)
                }
                setBuyPart(null);
            });


    }
    return (
        <div>
            <input type="checkbox" id="buying-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="buying-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Purchase for: <span className='font-extrabold text-accent-focus'>{name}</span></h3>

                    <form onSubmit={handleBuying} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" name='parts' disabled value={name} className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="number" disabled name='available' value={available} className="input input-bordered input-accent w-full max-w-xs"></input>

                        <input type="number" placeholder='Enter Quantity (Not less then minimum)' name="order" min={quantity} max={available} className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" disabled value={user?.displayName || ''} name="name" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="email" disabled value={user?.email || ''} name="email" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="number" placeholder="Your Phone Number" name="phone" className="input input-bordered input-accent w-full max-w-xs" />


                        <input type="submit" value="Buy Now" className="btn bg-accent-focus text-white w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BuyingModal;
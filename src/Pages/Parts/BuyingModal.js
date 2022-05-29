import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const BuyingModal = ({ buyPart, setBuyPart }) => {
    const { name, quantity, available } = buyPart;
    const [user] = useAuthState(auth);
    console.log(user);

    const handleBuying = event => {
        event.preventDefault();
        const customerName = event.target.name.value
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const order = event.target.order.value
        console.log(customerName, email, phone, order);


        setBuyPart(null);
    }
    return (
        <div>
            <input type="checkbox" id="buying-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="buying-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Purchase for: <span className='font-extrabold text-accent-focus'>{name}</span></h3>

                    <form onSubmit={handleBuying} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" name='parts' disabled value={name} class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="number" disabled name='available' value={available} class="input input-bordered input-accent w-full max-w-xs"></input>

                        <input type="number" placeholder='Enter Quantity (Not less then minimum)' name="order" min={quantity} max={available} class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" disabled value={user?.displayName || ''} name="name" class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="email" disabled value={user?.email || ''} name="email" class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="number" placeholder="Your Phone Number" name="phone" class="input input-bordered input-accent w-full max-w-xs" />


                        <input type="submit" value="Buy Now" className="btn bg-accent-focus text-white w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BuyingModal;
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L56lKA7sljKpXUKtCtE9Mwd7L3PFFjv2ZWDzwP8vLVFlfuLvVXKnXbYs0YYLMKKiLVGOKpnkHLHHQw2sg1vmDoP00fQVL975m');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`
    const { data: orders, isLoading } = useQuery(["orders", id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className="text-success font-bold">Hello! {orders.customer}</p>
                    <h2 class="card-title">Please pay for {orders?.parts}</h2>
                    <p>Your order will arrive within 30 days!</p>
                    <p>Please pay: <span className='text-orange-600 font-bold'>${orders?.price}</span></p>
                </div>
            </div>

            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl mt-8 bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user, navigate])
    return (
        <div>
            <h3>My Orders {orders.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Parts</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((or, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{or.customer}</td>
                                    <td>{or.parts}</td>
                                    <td>{or.quantity}</td>
                                    <td>${or.price}</td>
                                    <td>
                                        {(or.price && !or.paid) && <Link to={`/dashboard/payment/${or._id}`}><button className='btn btn-success btn-sm'>Pay</button></Link>}
                                        {(or.price && or.paid) && <span className='text-success'>Paid</span>}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
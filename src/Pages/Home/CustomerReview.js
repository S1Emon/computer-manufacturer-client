import React from 'react';
import useReview from '../../hooks/useReview';
import Review from './Review';

const CustomerReview = () => {
    const [reviews] = useReview()

    return (
        <div>

            <div className='container mx-auto my-16'>
                <div className='text-center mb-8'>
                    <h3 className='text-accent-focus font-bold text-xl uppercase'>Our Satisfied Customers</h3>
                    <h1 className='text-3xl font-bold'>What Customers Says</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        reviews?.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
            </div>










            {/* <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default CustomerReview;
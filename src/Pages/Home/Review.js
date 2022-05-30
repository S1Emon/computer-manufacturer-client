import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Review = ({ review }) => {
    const { name, comment, ratings, img } = review;
    const img1 = 'https://api.lorem.space/image/face?hash=3174'
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img || img1} alt="Profile" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <small>Review: {comment}</small>
                <p>Ratings: <span className='font-bold text-yellow-500'>{ratings}</span></p>
                <span className='text-yellow-500 flex'>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                </span>
            </div>
        </div>
    );
};

export default Review;
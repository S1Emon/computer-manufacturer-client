import React from 'react';
import { BsFillPeopleFill, BsTools } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';

const Summary = () => {
    return (
        <div className='container mx-auto my-14'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>Millions of Business Have Done</h1>
                <h3 className='text-xl text-accent-focus font-semibold'>Ready to get new Manufacturing deals and repeat Business</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 my-16'>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure>
                        <span className='text-7xl font-bold text-accent-focus'><BsFillPeopleFill></BsFillPeopleFill></span>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold">105M+</h2>
                        <p className='text-2xl font-semibold text-accent-focus'>Customers</p>
                        <small>We have done so many deals in 119 countries!</small>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure>
                        <span className='text-7xl font-bold text-accent-focus'><FaRegMoneyBillAlt></FaRegMoneyBillAlt></span>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold">110M+</h2>
                        <p className='text-2xl font-semibold text-accent-focus'>Annual Revenue</p>
                        <small>Satisfaction is of great revenue.</small>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure>
                        <span className='text-7xl font-bold text-accent-focus'><MdOutlineReviews></MdOutlineReviews></span>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold">60M+</h2>
                        <p className='text-2xl font-semibold text-accent-focus'>Reviews</p>
                        <small>A good, sympathetic review is always a wonderful surprise!</small>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure>
                        <span className='text-7xl font-bold text-accent-focus'><BsTools></BsTools></span>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold">12M+</h2>
                        <p className='text-2xl font-semibold text-accent-focus'>Parts & Service</p>
                        <small>Our life is for parts & service!</small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Summary;
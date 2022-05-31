import React from 'react';

const MyPortfolio = () => {
    return (
        <div >
            <h1 className='font-bold text-4xl text-center mt-6'>Welcome to My Portfolio!!!</h1>

            <div className='flex justify-center my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/0Qkn9bk/IMG-1716.jpg" alt="Profile" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Md Emon Hossain</h2>
                        <span className=''>
                            <p className='font-bold'>Educational Background:-</p>
                            <p className='font-semibold'>Department	: Marketing
                                University	:	National University
                                Year of passing		:	2019.
                                CGPA		:	3.28 Out Of 4.00
                            </p>
                        </span>
                        <span>
                            <p className='font-bold'>List of Skills </p>
                            <p className='font-semibold'>

                                1. HTML/CSS skills
                                2. Analytical skills
                                3. Responsive design skills
                                4. JavaScript skills
                                5. Interpersonal skills
                                6. Testing and debugging skills
                                7. Back-end basics
                            </p>
                        </span>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;
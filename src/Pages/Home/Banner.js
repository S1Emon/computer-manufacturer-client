import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/qCvV4rq/banner.jpg)" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
                    <h3 className="mb-5 text-3xl font-bold">Welcome to Computer Souls</h3>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-accent-focus text-white font-bold bg-gradient-to-r from-accent-focus to-accent-focus">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
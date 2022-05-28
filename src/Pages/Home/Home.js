import React from 'react';
import useServices from '../../hooks/useServices';
import Banner from './Banner';
import NewInfo from './NewInfo';
import Service from './Service';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const [services] = useServices()
    const services1 = services?.slice(0, 3);
    return (
        <div>
            <Banner></Banner>
            <NewInfo></NewInfo>
            <div className='container mx-auto'>
                <div className='text-center mb-8'>
                    <h3 className='text-accent-focus font-bold text-xl uppercase'>Our Services</h3>
                    <h1 className='text-3xl font-bold'>Service We Provide</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        services1?.map(service => <Service key={service?._id} service={service}></Service>)
                    }
                </div>
                <div className='my-5 flex justify-center'>
                    <Link to='services' className='font-semibold text-accent-focus flex'>See more<FaLongArrowAltRight className='text-2xl'></FaLongArrowAltRight></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
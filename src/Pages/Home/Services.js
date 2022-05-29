import React from 'react';
import useServices from '../../hooks/useServices';
import Footer from '../Shared/Footer';
import Service from './Service';
const Services = () => {
    const [services] = useServices()
    return (
        <div>
            <div className='my-16 container mx-auto'>
                <div className='text-center mb-8'>
                    <h3 className='text-accent-focus font-bold text-xl uppercase'>Our Services</h3>
                    <h1 className='text-3xl font-bold'>Service We Provide</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        services?.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Services;
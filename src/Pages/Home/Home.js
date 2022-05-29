import React from 'react';
import useServices from '../../hooks/useServices';
import Banner from './Banner';
import NewInfo from './NewInfo';
import Service from './Service';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Summary from './Summary';
import Footer from '../Shared/Footer';
import useParts from '../../hooks/useParts';
import Part from '../Parts/Part';

const Home = () => {
    const [services] = useServices();
    const services1 = services?.slice(0, 3);
    const [parts] = useParts();
    const parts1 = parts?.slice(0, 3);
    return (
        <div>
            <Banner></Banner>
            <NewInfo></NewInfo>
            <div className='container mx-auto my-16'>
                <div className='text-center mb-8'>
                    <h3 className='text-accent-focus font-bold text-xl uppercase'>Our Parts</h3>
                    <h1 className='text-3xl font-bold'>What We Manufacture</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        parts1?.map(part => <Part key={part._id} part={part}></Part>)
                    }
                </div>
                <div className='my-5 flex justify-center'>
                    <Link to='parts' className='font-semibold text-accent-focus'>See More</Link> <span className='text-2xl ml-1 text-accent-focus'><FaLongArrowAltRight></FaLongArrowAltRight></span>
                </div>
            </div>

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
                    <Link to='services' className='font-semibold text-accent-focus'>See More</Link> <span className='text-2xl ml-1 text-accent-focus'><FaLongArrowAltRight></FaLongArrowAltRight></span>
                </div>
            </div>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default Home;
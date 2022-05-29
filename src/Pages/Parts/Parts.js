import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts()
    return (
        <div className='container mx-auto my-16'>
            <div className='text-center mb-8'>
                <h3 className='text-accent-focus font-bold text-xl uppercase'>Our Parts</h3>
                <h1 className='text-3xl font-bold'>What We Manufacture</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    parts?.map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;
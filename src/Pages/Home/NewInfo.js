import React from 'react';
import NewInfoCard from './NewInfoCard';
import useNewItems from '../../hooks/useNewItems';
const NewInfo = () => {
    const [newItems] = useNewItems()
    console.log(newItems);
    return (
        <div className='container mx-auto my-16'>
            <h1 className='text-center text-3xl font-bold my-8'>What's New</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    newItems?.map(newItem => <NewInfoCard key={newItem._id} newItem={newItem}></NewInfoCard>)
                }
            </div>
        </div>

    );
};

export default NewInfo;
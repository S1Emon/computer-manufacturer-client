import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PartsRow from './PartsRow';

const ManageParts = () => {
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://mysterious-forest-28554.herokuapp.com/parts', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Manage All Parts {parts?.length}</h1>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Price<br /><small>Per unit</small></th>
                        <th>Available Unit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parts?.map((part, index) => <PartsRow
                            key={part._id}
                            index={index}
                            part={part}
                            refetch={refetch}
                        ></PartsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageParts;
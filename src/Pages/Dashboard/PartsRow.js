import React from 'react';
import { toast } from 'react-toastify';

const PartsRow = ({ part, index, refetch, setDeleteParts }) => {
    const { _id, name, img, price, available } = part;

    const handleDelete = (id) => {
        fetch(`https://mysterious-forest-28554.herokuapp.com/parts/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Parts Deleted")
                    refetch();
                }
            })

    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{available}</td>
            <td>
                <label onClick={() => handleDelete(_id)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>

    );
};

export default PartsRow;
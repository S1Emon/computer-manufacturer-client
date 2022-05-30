import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddParts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `https://mysterious-forest-28554.herokuapp.com/parts`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success("New Parts Added")
                    reset()
                }
                else {
                    toast.error("Failed to add the parts")
                }
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Parts Name" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Image URL</span>
                    </label>
                    <input {...register("img", { required: true })} type="text" placeholder="Image URL" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input {...register("price", { required: true })} type="number" placeholder="Price per Unit" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Minimum Quantity</span>
                    </label>
                    <input {...register("quantity", { required: true })} type="number" placeholder="Minimum Quantity" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Add Quantity</span>
                    </label>
                    <input {...register("available", { required: true })} type="number" placeholder="Add Quantity" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <input {...register("details", { required: true })} type="text" placeholder="Parts Description" class="input input-bordered w-full max-w-xs" />
                </div>

                <input type="submit" value="Add One" class="btn btn-accent mt-3" />
            </form>
        </div>
    )


}

export default AddParts;
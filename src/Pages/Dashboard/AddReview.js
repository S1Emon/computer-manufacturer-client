import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `https://mysterious-forest-28554.herokuapp.com/review`
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
                    toast.success("Review Added")
                    reset()
                }
                else {
                    toast.error("Failed to add the Review")
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Your Name</span>
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
                        <span class="label-text">Ratings</span>
                    </label>
                    <input {...register("ratings", { required: true })} type="number" placeholder="Ratings out of 5 " class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <input {...register("comment", { required: true })} type="text" placeholder="Parts Description" class="input input-bordered w-full max-w-xs" />
                </div>

                <input type="submit" value="Add One" class="btn btn-accent mt-3" />
            </form>
        </div>
    );
};

export default AddReview;
import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser)

    const navigate = useNavigate();

    let signInError;
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
    };

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate("/");
    }

    if (error || gError || updatingError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message || updatingError?.message}</p>
    }

    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center h-screen my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Register</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Name Field */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text"
                                    placeholder="Your Full Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Full Name is required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            {/* Email Field */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email"
                                    placeholder="Email address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Enter a valid Email address'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* Password Field*/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 character or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>


                            {signInError}
                            <input type="submit" className="btn btn-accent w-full mx-w-xs" value="Login" />
                        </form>
                        <p><small>Already have an account? <Link to="/login" className="text-accent">Please login</Link></small></p>

                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-accent"
                        >Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
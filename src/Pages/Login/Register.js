import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    let signInError;
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
        navigate("/");
    };

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        console.log(user, gUser);
    }
    if (error || gError || updatingError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message || updatingError?.message}</p>
    }
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center h-screen my-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center font-bold text-2xl">Register</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Name Field */}
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your Email</span>
                                </label>
                                <input type="text"
                                    placeholder="Your Full Name"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Full Name is required"
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            {/* Email Field */}
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your Email</span>
                                </label>
                                <input type="email"
                                    placeholder="Email address"
                                    class="input input-bordered w-full max-w-xs"
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
                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* Password Field*/}
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="Password"
                                    class="input input-bordered w-full max-w-xs"
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
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>


                            {signInError}
                            <input type="submit" class="btn btn-accent w-full mx-w-xs" value="Login" />
                        </form>
                        <p><small>New to Parts Manufacturer? <Link to="/register" className="text-accent">Create an account</Link></small></p>

                        <div class="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            class="btn btn-outline btn-accent"
                        >Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleLogin = (event) => {
        event.preventDefault()
        setError('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const userinfo = result.user;
                form.reset();
            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setError('Your Email Or Password Is Not Correct.')
                }
            })
    }

    const handleGoogleSingIn = () => {
        googleSignIn();
    }
    const handleGithubSignIn = () => {
        githubSignIn();
    }
    return (
        <div className='p-5 mx-5 mt-10  bg-white lg:w-1/2 lg:mx-auto rounded-3xl shadow-2xl border border-slate-600'>
            <h1 className='text-5xl font-bold text-center mb-4'>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered w-full" required />
                </div>
                <div className='text-red-500 text-center'>
                    {
                        error ? <p>{error}</p> : <></>
                    }
                </div>
                <div className="px-10 mt-6">
                    <button className='btn block w-full bg-transparent text-slate-950 hover:bg-slate-300' type='submit'>Login</button>
                </div>
                <p className='text-center mt-2'>Don't have an account yet? <Link to='/register' className='link link-hover text-blue-500'>Register</Link></p>
                <div className='relative my-10 mx-5 lg:mx-20'>
                    <p className='px-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl bg-white'>or</p>
                    <hr className='bg-slate-950 h-[1.5px]' />
                </div>
                <div className='flex flex-wrap gap-x-10 gap-y-5 justify-center'>
                <button className='btn bg-transparent text-slate-950 hover:bg-slate-300 px-5 lg:px-10' onClick={handleGoogleSingIn}>Google</button>
                <button className='btn bg-transparent text-slate-950 hover:bg-slate-300 px-5 lg:px-10' onClick={handleGithubSignIn}>Github</button>
            </div>
            </form>
        </div>
    );
};

export default Login;
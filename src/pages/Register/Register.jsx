import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser, setUserNameAndPicture, setNameAndPic } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const handleRegister = (event) => {
        event.preventDefault();

        setError('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const fullName = form.fullName.value;
        const photoUrl = form.photoUrl.value;

        console.log(form, email, password)
        createUser(email, password)
            .then(result => {
                const userInfo = result.user;
                setUserNameAndPicture(fullName, photoUrl)
                    .then(() => {
                        console.log('profile updated!')
                        setNameAndPic([fullName,photoUrl])
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                console.log(userInfo)
            })
            .catch(error => {
                if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).')
                setError('Password should have at least 6 characters.')
            })
    }
    return (
        <div className='p-5 mx-5 mt-10  bg-white lg:w-1/2 lg:mx-auto rounded-3xl shadow-2xl border border-slate-600'>
            <h1 className='text-5xl font-bold text-center mb-4'>Register</h1>
            <form onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name='fullName' placeholder="John Doe" className="input input-bordered w-full" />
                </div>
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photoUrl' placeholder="url" className="input input-bordered w-full" />
                </div>
                <div className='text-red-500 text-center mt-2'>
                    {
                        error ? <p>{error}</p> : <></>
                    }
                </div>
                <div className="px-10 mt-6">
                    <button className='btn block w-full bg-transparent text-slate-950 hover:bg-slate-300' type='submit'>Register</button>
                </div>


            </form>
        </div>
    );
};

export default Register;
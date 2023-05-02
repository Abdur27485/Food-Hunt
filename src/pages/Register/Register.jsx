import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(form, email, password)
    }
    return (
        <div>
            <form onSubmit={handleRegister} className='mx-auto p-5 mt-24 bg-gray-500'>
            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name='fullName' placeholder="John Doe" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photoUrl' placeholder="URL" className="input input-bordered w-full max-w-xs" required />
                </div>

                <button className='btn' type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;
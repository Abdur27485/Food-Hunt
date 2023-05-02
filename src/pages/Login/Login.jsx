import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const userinfo = result.user;
                console.log(userinfo)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogleSingIn = () => {
            googleSignIn();
    }
    const handleGithubSignIn = () => {
        githubSignIn();
    }
    return (
        <div className='p-5 mt-24 bg-gray-500'>
            <form onSubmit={handleLogin}>
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
                <button className='btn' type='submit'>Login</button>
                <p>Don't have an account yet? <Link to='/register'>Register</Link></p>
            </form>
            <button className='btn' onClick={handleGoogleSingIn}>Google</button>
            <button className='btn' onClick={handleGithubSignIn}>Github</button>
        </div>
    );
};

export default Login;
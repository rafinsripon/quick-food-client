import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../Assets/Images/Screenshot_25-removebg-preview.png'
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/UseTitle';
import { setAuthToken } from '../../ulits/Auth';

const Register = () => {
    const {createUser, signWithGoogle, updateUseProfile, loading} = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('register')

    if(loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto text-center mt-10"></div>
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email, password);

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            form.reset();
            setAuthToken(user)
            navigate('/');
            handleUpdateUserProfile(name)
            console.log('Sign Up Success:', user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log("Sign Up error:", errorMessage);
        })

    }
    //update user profile form Firebase
    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }
        updateUseProfile(profile)
        .then(() => {})
        .catch(error => {
            console.log("upaded profile Error", error)
        })
    }
    //Sign With Google
    const handleGooleSignUp = () => {
        signWithGoogle()
        .then((result) => {
            const user = result.user;
            setAuthToken(user)
            navigate('/')
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log("Google Sign Up error:", errorMessage);
        })
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 pt-8 pb-8 lg:px-16 md:px-1 mb-14'>
            <div className="rounded-lg shadow-md">
                <img className='lg:w-full mx-auto' src={login} alt="" />
            </div>
            <div className="w-full max-w-md p-6 space-y-3 rounded-xl dark:text-gray-100 mx-auto border-2 ">
                <h1 className="text-3xl font-bold text-center text-slate-400">Register Now</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-1 text-sm mt-4">
                        <label htmlFor="name" className="block dark:text-gray-500 text-lg font-semibold">Name*</label>
                        <input type="text" name="name" id="name" placeholder="You Name" className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm mt-4">
                        <label htmlFor="email" className="block dark:text-gray-500 text-lg font-semibold">Email*</label>
                        <input type="email" name="email" id="email" placeholder="You Email" className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm mt-4">
                        <label htmlFor="password" className="block dark:text-gray-500 text-lg font-semibold">Password*</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required/>
                        <p className="text-rose-600 font-semibold">
                            {''}
                        </p>
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            {''}
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-3xl text-gray-100 font-bold bg-sky-600 mt-4">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-500 font-bold">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="text-center">
                    <button onClick={handleGooleSignUp}  aria-label="Log in with Google" className="p-2 rounded-sm text-xl flex border-2 border-sky-600 w-full justify-center gap-4 text-slate-900">
                        <FcGoogle className='text-3xl' /> Sign With Goole
                    </button>
                </div>
                <p className="text-center sm:px-6 dark:text-gray-400 text-bold">Already Have an account?
                    <Link rel="noopener noreferrer" to="/login" className="underline dark:text-blue-800 text-bold">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
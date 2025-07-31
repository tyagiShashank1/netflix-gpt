import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="logo" />
            </div>


            <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
                <h1 className="font-bold text-3xl py-4">{isSignInForm === true ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-700 w-full rounded-lg" />}
                <input type="text" placeholder="Email Address" className="p-4 my-4 bg-gray-700 border-white w-full rounded-lg" />
                <input type="password" placeholder="Password" className="p-4 my-4 bg-gray-700 w-full rounded-lg" />
                <button className="p-4 my-6 bg-red-700 rounded-lg w-full rounded-lg">{isSignInForm === true ? 'Sign In' : 'Sign Up'}</button>
                <p className="py-4 underline cursor-pointer" onClick={() => toggleSignInForm()}>{isSignInForm === true ? 'New To Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}</p>

            </form>
        </div>

    )
}

export default Login;
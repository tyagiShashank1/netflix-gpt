import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase'
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { USER_AVATAR } from "../Utils/constants";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }


    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);


    const hanldeButtonClick = () => {
        //Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message)
        if (message) return; //means invalid email/password

        //Sign Up Logic
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName.current.value, photoURL: USER_AVATAR,
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);

                    // ..
                });


        }
        else {
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 

                    const user = userCredential.user;



                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + '-' + errorCode);
                });


        }


    }


    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="logo" />
            </div>


            <form onSubmit={(e) => { e.preventDefault() }} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
                <h1 className="font-bold text-3xl py-4">{isSignInForm === true ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input type="text" ref={fullName} placeholder="Full Name" className="p-4 my-4 bg-gray-700 w-full rounded-lg" />}
                <input type="text" ref={email} placeholder="Email Address" className="p-4 my-4 bg-gray-700 border-white w-full rounded-lg" />
                <input type="password" ref={password} placeholder="Password" className="p-4 my-4 bg-gray-700 w-full rounded-lg" />
                {errorMessage && <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>}
                <button type="button" className="p-4 my-6 bg-red-700 rounded-lg w-full rounded-lg" onClick={() => { hanldeButtonClick() }}>{isSignInForm === true ? 'Sign In' : 'Sign Up'}</button>
                <p className="py-4 underline cursor-pointer" onClick={() => toggleSignInForm()}>{isSignInForm === true ? 'New To Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}</p>

            </form>
        </div>

    )
}

export default Login;

// 
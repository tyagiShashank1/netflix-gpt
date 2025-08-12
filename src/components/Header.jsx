import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constants";
import {toggleGptSearchView} from '../Utils/gptSlice'
import { SUPPORTED_LANGUAGES } from "../Utils/constants";
import {changeLanguage} from '../Utils/configSlice';
const Header = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(function (store) {
        return store.user;
    })

    const isGptView = useSelector(function(appStore){
        return appStore.gpt.showGptSearch;
    })
    //GPT button click
    const handleGptButtonClick = () =>{
        //Toggle GPT Search View
        dispatch(toggleGptSearchView());
    }

    //Sign Out
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error');
        });
    }

    //handleDrowdownValueChange

    const handleDrowdownValueChange = (e) =>{
            dispatch(changeLanguage(e.target.value));
    }
    //
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse')
            }

            else {
                dispatch(removeUser());
               // dispatch(removeNowPlayingMovies());
                navigate('/')
            }

        });
        //this will be called when components unmounts
        return function () {
            unsubscribe();
        }
    }, [])
 
    //get Now playing movies

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
            {user && (<div className="flex p-2 justify-between">
                {isGptView &&(<select className="p-2 m-2 bg-gray-900 text-white rounded-lg" onChange={(e)=>handleDrowdownValueChange(e)}>
                    {SUPPORTED_LANGUAGES.map((item)=>{
                        return <option key={item.identifier} value={item.identifier}>{item.name}</option>
                    })}
                </select>)}
                <button onClick={()=>{handleGptButtonClick()}}className="py-2 px-4 mx-4 my-2 bg-red-800 text-white rounded-lg">{isGptView?"Home Page":"Gemini Search"}</button>

                <img className="hidden md:block w-12 h-12" src={user?.photoURL} alt="usericon" />
                <button onClick={handleSignOut} className="font-bold text-white ">(Sign Out)</button>
            </div>)}
        </div>
    )
}
export default Header;
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constants";
import { removeNowPlayingMovies } from "../Utils/moviesSlice";
const Header = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(function (store) {
        return store.user;
    })

    //Sign Out
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error');
        });
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
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={LOGO} alt="logo" />
            {user && <div className="flex p-2">
                <img className="w-12 h-12" src={user?.photoURL} alt="usericon" />
                <button onClick={handleSignOut} className="font-bold text-white ">(Sign Out)</button>
            </div>}
        </div>
    )
}
export default Header;
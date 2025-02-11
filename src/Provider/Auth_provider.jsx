/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Auth_Context = createContext();
const Auth_provider = ({children}) => {
    const [user, set_user] = useState(null);
    const google_provider = new GoogleAuthProvider()
    const handle_register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }
    const handle_login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const handle_google_login = () => {
        signInWithPopup(auth, google_provider)
    }
    const sign_out = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current_user) => {
            console.log(current_user);
        });
        return () => {
            unsubscribe();
        }
    })

    const auth_info = {
        user,
        set_user,
        handle_register,
        handle_login,
        handle_google_login,
        sign_out
    }
    return (
        <div>
            <Auth_Context.Provider value={auth_info}>
                {children}
            </Auth_Context.Provider>
        </div>
    );
};

export default Auth_provider;
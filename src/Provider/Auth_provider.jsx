/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const Auth_Context = createContext();
const Auth_provider = ({children}) => {
    const [user, set_user] = useState(null);
    const [loading, set_loading] = useState(true);
    const google_provider = new GoogleAuthProvider()
    const handle_register = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const handle_login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handle_google_login = () => {
       return signInWithPopup(auth, google_provider)
    }
    const sign_out = () => {
       return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current_user) => {
            console.log(current_user);
            if (current_user) {
                set_user(current_user)
            }
            else {
                set_user(null);
            };
            set_loading(false)
        });
        return () => {
            unsubscribe();
        }
    });

    const manage_profile = (name, profile) => {
        updateProfile (auth.currentUser, {
            displayName: name, photoURL: profile
        })
        
    }

    const auth_info = {
        user,
        set_user,
        handle_register,
        handle_login,
        handle_google_login,
        sign_out,
        manage_profile,
        loading
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
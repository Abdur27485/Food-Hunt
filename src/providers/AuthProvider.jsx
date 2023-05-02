import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const setUserNameAndPicture = (fullName, photoUrl) => {
        return updateProfile( auth.currentUser, { displayName: fullName, photoURL : photoUrl })
    }

    const data = {
        createUser,
        loginUser,
        setUserNameAndPicture,
        user,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, (currentUser) => {
            setUser(currentUser);
            console.log('AuthState changed!', currentUser)
        })

        return () => {
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
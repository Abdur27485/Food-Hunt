import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

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
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
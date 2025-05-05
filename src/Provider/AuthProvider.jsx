import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    console.log(user);
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout =()=>{
        return signOut(auth);
    }

    const authData = {
        user,
        setUser,
        createUser,
        login,
        logout,
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider
    const githubProvider = new GithubAuthProvider

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProf = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('the current user is', currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { createUser, loginWithPassword, user, updateProf, googleLogin, githubLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
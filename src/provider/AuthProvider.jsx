import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [upProfile, setUpProfile] = useState(false)

    const googleProvider = new GoogleAuthProvider
    const githubProvider = new GithubAuthProvider

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProf = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(upProfile){
                setUser(currentUser)
                setUpProfile(false)
                // setLoading(false)
                // return
            }
            setUser(currentUser)
            setLoading(false)
            console.log('the current user is', currentUser)

        })

        return () => {
            unsubscribe()
        }
    }, [upProfile])

    const authInfo = { createUser, loginWithPassword, user, updateProf, googleLogin, githubLogin, loading, logOut, setUser, setLoading, setUpProfile }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
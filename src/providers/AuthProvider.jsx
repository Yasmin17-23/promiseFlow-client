import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"

const auth = getAuth(app);
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setUser(null);
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
            }
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
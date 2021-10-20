import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/Firebase.init";

initializeFirebaseAuth();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    const registerUser = (email, password) => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase())) {
            setError('Please enter a valid email');
            return;
        }
        else if (password.length < 6) {
            setError("Password must be 6 characters long");
            return;
        }

        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                getUserName(name);
                setUser(result.user);
                console.log(result.user);
                setError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    const getUserName = (userName) => {
        // console.log(userName);
        setName(userName)
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => { })
            .catch((error) => {
                console.log(error);
            });
    }


    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                console.log(error);
            }).finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            user ? setUser(user) : setUser({})
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    return {
        user,
        error,
        isLoading,
        setIsLoading,
        setError,
        registerUser,
        signInWithGoogle,
        getUserName,
        loginUser,
        logOut
    }
}

export default useFirebase;
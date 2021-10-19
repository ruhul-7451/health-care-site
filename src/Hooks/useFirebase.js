import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/Firebase.init";

initializeFirebaseAuth();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            user ? setUser(user) : setUser({})
        });
        return () => unsubscribed;
    }, []);

    return {
        user,
        signInWithGoogle,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;
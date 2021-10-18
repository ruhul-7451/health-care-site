import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/Firebase.init";

initializeFirebaseAuth();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setUser(result.user);
                console.log(result.user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorCode, errorMessage, email, credential);
            });
    };

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user);
                console.log(result.user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
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
            .then(() => {
                setUser({});
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
        })
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
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInit from "../components/Firebase/firebase.init";



FirebaseInit();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError]= useState('');

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)

            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])

    const handleRegister = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('');
            userName();
        })
        .catch(error => {
            setError(error.message);
          });
    }
    
    const userName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(result=>{ })
    }

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log('abcd', user)
            setError('');
        })
        .catch(error => {
            setError(error.message);
          });
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
            .finally(() => setIsLoading(false))
    }
    return {
        user,
        googleSignIn,
        isLoading,
        logOut,
        setPassword,
        setEmail,
        handleRegister,
        error,
        handleLogin,
        setName
    }

};

export default useFirebase;
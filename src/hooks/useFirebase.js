import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
<<<<<<< HEAD
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
initializeFirebase();


const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const auth = getAuth();

  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.form || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }



  //observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {

      // alert('Sign-out successful');
    }).catch((error) => {

    })
      .finally(() => setIsLoading(false));
  }

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logOut,
  }
=======
import { getAuth, onAuthStateChanged  ,createUserWithEmailAndPassword , signInWithEmailAndPassword ,signOut} from "firebase/auth";
initializeFirebase();


const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError , setAuthError] = useState('');
    const auth = getAuth();

    const registerUser = (email, password) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth , email, password)
        .then((userCredential) => {
           setAuthError('');
          })
          .catch((error) => {
            setAuthError(error.message);
            // ..
          })
          .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }



    //observer user state
    useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    } , [])
    
    const logOut = ()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            
            alert('Sign-out successful');
          }).catch((error) => {
            
          })
          .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut,
    }
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
}

export default useFirebase;
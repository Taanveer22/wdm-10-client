import { useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../utilities/firebase.config";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  // google sign in function
  const signInWithGoogle = () => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  };

  // Register function
  const registerUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login function
  const loginUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout function
  const logoutUser = () => {
    setLoading(false);
    return signOut(auth);
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // console.log("User changed:", user);
      // console.log("Loading state:", loading);
    });

    return unsubscribe;
  }, [user, loading]);

  // Values to share via context
  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    logoutUser,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };

export default AuthProvider;

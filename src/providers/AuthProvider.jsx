import { useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../utilities/firebase.config";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  // google sign in function
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // Register function
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login function
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout function
  const logoutUser = () => {
    return signOut(auth);
  };

  // update profile function
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Values to share via context
  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    logoutUser,
    signInWithGoogle,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };

export default AuthProvider;

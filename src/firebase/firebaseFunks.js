import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider } from "./firebase";

export const handleSignUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const handleLogin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const handleSignOut = () => {
  return signOut(auth);
};

export const handleGoogleSignIn = () => {
  return signInWithPopup(auth, provider);
};

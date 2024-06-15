import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc184ivxTJ3AAsxrtVZHO76Fx4dgi67S0",
  authDomain: "piquicel.firebaseapp.com",
  projectId: "piquicel",
  storageBucket: "piquicel.appspot.com",
  messagingSenderId: "516874186056",
  appId: "1:516874186056:web:2bcf8245ec97e4d1d0177d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider({
  prompt: "select_account",
});

export const auth = getAuth();

export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userFromAuth,
  additionaInformation = {}
) => {
  const userDocRef = doc(db, "users", userFromAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userFromAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionaInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  const user = await getDoc(userDocRef);

  return user.data();
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

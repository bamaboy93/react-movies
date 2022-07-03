import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnSHzhH_OwLfkK3TiPi9pyppaNNjj99AE",
  authDomain: "react-movies-c0c4b.firebaseapp.com",
  projectId: "react-movies-c0c4b",
  storageBucket: "react-movies-c0c4b.appspot.com",
  messagingSenderId: "924692902645",
  appId: "1:924692902645:web:be2557de6bb1a3b475cbbc",
  measurementId: "G-GFEFVXTY3W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithRedirect(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

export { auth, db, signInWithGoogle, logout };

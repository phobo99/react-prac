import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDRZ8KZ3QE3B7hHyW7UHAXgRlXkQH8VMH4",
  authDomain: "monkey-blogging-cbe1d.firebaseapp.com",
  projectId: "monkey-blogging-cbe1d",
  storageBucket: "monkey-blogging-cbe1d.appspot.com",
  messagingSenderId: "530396686805",
  appId: "1:530396686805:web:15d12241e4331be456b55c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

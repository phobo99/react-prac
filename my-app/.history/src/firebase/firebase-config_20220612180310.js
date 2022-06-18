import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestrore";
const firebaseConfig = {
  apiKey: "AIzaSyDODeSOj3ywdbO40ekPwPLF2YG3yNZLQaE",
  authDomain: "fir-learn-45c7a.firebaseapp.com",
  projectId: "fir-learn-45c7a",
  storageBucket: "fir-learn-45c7a.appspot.com",
  messagingSenderId: "366910505238",
  appId: "1:366910505238:web:7b7ca8890134e30d26d037",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Init services
const db = getFireStore();

import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  useEffect(() => {
    // colRef
    const colRef = collection(db, "post");
    console.log(colRef);
    // 1. Get collection data (posts)
    getDocs().then((snapshot) => {
      console.log(snapshot);
    });
  }, []);
  return <div></div>;
};

export default FirebaseApp;

import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  // colRef
  const colRef = collection(db, "post");
  console.log(colRef);
  useEffect(() => {
    // 1. Get collection data (posts)
    getDocs();
  }, []);
  return <div></div>;
};

export default FirebaseApp;

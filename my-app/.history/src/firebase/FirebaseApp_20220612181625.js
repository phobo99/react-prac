import { collection } from "firebase/firestore";
import React from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  // colRef
  const colRef = collection(db, "post");
  console.log(colRef);
  return <div></div>;
};

export default FirebaseApp;

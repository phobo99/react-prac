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
    getDocs(colRef).then((snapshot) => {
      console.log(snapshot);
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(posts);
    });
  }, []);
  return <div></div>;
};

export default FirebaseApp;

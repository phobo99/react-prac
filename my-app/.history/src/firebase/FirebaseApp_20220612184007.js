import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  // colRef
  const colRef = collection(db, "posts");
  console.log(colRef);
  useEffect(() => {
    // 1. Get collection data (posts)
    getDocs(colRef)
      .then((snapshot) => {
        console.log("snapshot: ", snapshot);
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5"
          />
        </form>
      </div>
    </div>
  );
};

export default FirebaseApp;

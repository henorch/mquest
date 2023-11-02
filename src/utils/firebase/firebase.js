
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  writeBatch,
  getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDEfVCD5cI8GxV1I2HwMwBlYwZY1ZBcmp0",
  authDomain: "mind-quest.firebaseapp.com",
  projectId: "mind-quest",
  storageBucket: "mind-quest.appspot.com",
  messagingSenderId: "938022234695",
  appId: "1:938022234695:web:d2c787bcc27508447fdf62"
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  });

  await batch.commit();
  console.log("done");

}


export const getCategoryAndDocument = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);


  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoryMap;
}
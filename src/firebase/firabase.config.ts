import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDNkx51za6hpW7Up_yfzWs2Yb5n-xJGHYk",
  authDomain: "todo-list-v4-99e77.firebaseapp.com",
  projectId: "todo-list-v4-99e77",
  storageBucket: "todo-list-v4-99e77.appspot.com",
  messagingSenderId: "1063107191731",
  appId: "1:1063107191731:web:ca99d6c884ed3ba06ba1c6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

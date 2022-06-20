// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCen5lKvJX5pFwO0v5XQnYFSYBs7OsmSn8",
  authDomain: "ajay-todo.firebaseapp.com",
  projectId: "ajay-todo",
  storageBucket: "ajay-todo.appspot.com",
  messagingSenderId: "477121636694",
  appId: "1:477121636694:web:0df13a75ca0ff376bb8ef7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
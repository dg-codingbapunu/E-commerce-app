import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA546TKMTqC109-G6USULOj59HhX4QTeS8",
  authDomain: "myecom-ef32b.firebaseapp.com",
  projectId: "myecom-ef32b",
  storageBucket: "myecom-ef32b.appspot.com",
  messagingSenderId: "1020485743438",
  appId: "1:1020485743438:web:a88af42eb7f50ae3c6241f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export { auth, fireDB };

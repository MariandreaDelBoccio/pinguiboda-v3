import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2lILseltU3180uduVUAu1TW2ChLwPjhA",
  authDomain: "pinguiboda-db0cd.firebaseapp.com",
  projectId: "pinguiboda-db0cd",
  storageBucket: "pinguiboda-db0cd.appspot.com",
  messagingSenderId: "65364845607",
  appId: "1:65364845607:web:26f0c3c5f343578a4b5a02",
  measurementId: "G-04FTVM2HSY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };

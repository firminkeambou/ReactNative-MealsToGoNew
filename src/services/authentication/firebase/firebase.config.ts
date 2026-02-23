import { initializeApp } from "firebase/app";
// Initialize Firebase
// Your web app's Firebase configuration/ remember we chose "web SDK(<>) from firebase console"
/* const firebaseConfig = {
    apiKey: "AIzaSyBbQU0Cliv5C01RM3ih2B7n060AzAOmd4Q",
    authDomain: "mealstogoreactnativ.firebaseapp.com",
    projectId: "mealstogoreactnativ",
    storageBucket: "mealstogoreactnativ.firebasestorage.app",
    messagingSenderId: "436530937554",
    appId: "1:436530937554:web:477868f49047ca1f2ab70b",
  }; */
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

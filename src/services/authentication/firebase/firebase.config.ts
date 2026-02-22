import { initializeApp } from "firebase/app";
// Initialize Firebase
// Your web app's Firebase configuration/ remember we chose "web SDK(<>) from firebase console"
const firebaseConfig = {
  apiKey: "AIzaSyBbQU0Cliv5C01RM3ih2B7n060AzAOmd4Q",
  authDomain: "mealstogoreactnativ.firebaseapp.com",
  projectId: "mealstogoreactnativ",
  storageBucket: "mealstogoreactnativ.firebasestorage.app",
  messagingSenderId: "436530937554",
  appId: "1:436530937554:web:477868f49047ca1f2ab70b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

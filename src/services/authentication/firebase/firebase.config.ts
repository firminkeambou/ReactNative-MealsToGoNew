import { initializeApp } from 'firebase/app';
// Initialize Firebase
// Your web app's Firebase configuration/ remember we chose "web SDK(<>) from firebase console"
// functions to help android/ios emulators to use firebase functions emulators # firmin
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { Platform } from 'react-native';

// end functions for emulators

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

// connect to firebase functions emulator if we are in development mode and running on android or ios emulators
const functions = getFunctions(app);
if (__DEV__) {
  const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
  connectFunctionsEmulator(functions, host, 5001);
}
// end connecting to firebase functions emulator if we are in development mode and running on android or ios emulators

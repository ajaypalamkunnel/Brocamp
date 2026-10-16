import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB5bGW2cO4qRbCNAbVcKoNzx1i-lml4EoM",
  authDomain: "auth-app-d55e2.firebaseapp.com",
  projectId: "auth-app-d55e2",
  storageBucket: "auth-app-d55e2.firebasestorage.app",
  messagingSenderId: "638675434631",
  appId: "1:638675434631:web:29f427261f79f96ebe4c22",
  measurementId: "G-ZLCHTDVC41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

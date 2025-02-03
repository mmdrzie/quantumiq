import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6Zqm8guxTkAx6AiIxdhRDaKVx_O9ytxw",
  authDomain: "quantumiq-1.firebaseapp.com",
  projectId: "quantumiq-1",
  storageBucket: "quantumiq-1.firebasestorage.app",
  messagingSenderId: "25371488545",
  appId: "1:25371488545:web:082388e07bd127e0870e60",
  measurementId: "G-TGP8BP3DLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Explicit exports
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
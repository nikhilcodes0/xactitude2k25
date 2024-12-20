// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ_qJYCc1YMc4garT_PYSAD1VoWqM5OFI",
  authDomain: "xact-db.firebaseapp.com",
  projectId: "xact-db",
  storageBucket: "xact-db.firebasestorage.app",
  messagingSenderId: "629705654759",
  appId: "1:629705654759:web:ad67cfc8c2ce9aa2747d42",
  measurementId: "G-32W9PB7J5S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

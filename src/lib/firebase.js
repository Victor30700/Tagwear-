// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // 1. Importar getStorage
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:           process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:       process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:            process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId:    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

// Exportaciones de los servicios de Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // 2. Inicializar y exportar storage

export let analytics = null;
if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) {
  analytics = getAnalytics(app);
}

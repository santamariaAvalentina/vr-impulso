import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK-BNmmD2hOdk9G2ixCfml0W-dDSRUoF0",
  authDomain: "vr-impulso.firebaseapp.com",
  projectId: "vr-impulso",
  storageBucket: "vr-impulso.firebasestorage.app",
  messagingSenderId: "684092686577",
  appId: "1:684092686577:web:5f39de9697880ab49aa250"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
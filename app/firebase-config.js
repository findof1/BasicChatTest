import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCSYlfwkZP3ZSnS-vc5cMjYmRoMVbIQ19c",
  authDomain: "realtime-db-test-d7380.firebaseapp.com",
  projectId: "realtime-db-test-d7380",
  storageBucket: "realtime-db-test-d7380.appspot.com",
  messagingSenderId: "778895608213",
  appId: "1:778895608213:web:56fba8e3336384daadce9c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const rl = getDatabase(app)
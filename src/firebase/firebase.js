import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDryP5_T2OmG6sIRGAClspzG-9CB3nXAXA",
  authDomain: "instagram-clone-b524e.firebaseapp.com",
  projectId: "instagram-clone-b524e",
  storageBucket: "instagram-clone-b524e.firebasestorage.app",
  messagingSenderId: "320796666303",
  appId: "1:320796666303:web:b44e406b8c5579f2bcd90a",
  measurementId: "G-KQC2ZZ96LR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};
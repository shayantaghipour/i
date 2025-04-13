import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC7thqlWA1C-BAYvQjNS33bLGFmrtf8pPM",
  authDomain: "instagram-clone-fc9e3.firebaseapp.com",
  projectId: "instagram-clone-fc9e3",
  storageBucket: "instagram-clone-fc9e3.firebasestorage.app",
  messagingSenderId: "386615637740",
  appId: "1:386615637740:web:73951398bddf0e6565d7c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
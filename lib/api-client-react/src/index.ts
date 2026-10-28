import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChM2Xsp4hzGG7CkPeW21noLqZhLvhMwj0",
  authDomain: "arunothai-webiste.firebaseapp.com",
  projectId: "arunothai-webiste",
  storageBucket: "arunothai-webiste.firebasestorage.app",
  messagingSenderId: "546161100574",
  appId: "1:546161100574:web:d1aae51090ea0dcb7fab0f",
  measurementId: "G-DVQ079X6G6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
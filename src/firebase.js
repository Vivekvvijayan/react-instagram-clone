// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe1J2_IPs0xcI8brrxjNjoiTfG5M8Dy0A",
  authDomain: "instagram-web-clone-78c1b.firebaseapp.com",
  projectId: "instagram-web-clone-78c1b",
  storageBucket: "instagram-web-clone-78c1b.appspot.com",
  messagingSenderId: "690699961769",
  appId: "1:690699961769:web:9e18d341d13db8209030b8"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);


export const db = getFirestore(firebase)
export const storage = getStorage(firebase)

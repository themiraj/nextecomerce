// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2tNV9nxcSFHr2G7qdWBisg0QfqNIIQqI",
  authDomain: "nextjsblog-5c874.firebaseapp.com",
  projectId: "nextjsblog-5c874",
  storageBucket: "nextjsblog-5c874.appspot.com",
  messagingSenderId: "762872611944",
  appId: "1:762872611944:web:fb4c9d306f186cdb6a67dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
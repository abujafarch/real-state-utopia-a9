// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-eftHpzoV61ME3r4vK3ZT-kdqvWSl32g",
  authDomain: "utopia-1c334.firebaseapp.com",
  projectId: "utopia-1c334",
  storageBucket: "utopia-1c334.appspot.com",
  messagingSenderId: "168264681886",
  appId: "1:168264681886:web:ca7b1749208fdcc3122e8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
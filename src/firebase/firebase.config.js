// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH86L0LtIVWb8GjSGPIqn-fHJa8Zk6tRk",
    authDomain: "travel-guru-c92ee.firebaseapp.com",
    projectId: "travel-guru-c92ee",
    storageBucket: "travel-guru-c92ee.appspot.com",
    messagingSenderId: "960219795599",
    appId: "1:960219795599:web:e6d8a00defbe81fe3220fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
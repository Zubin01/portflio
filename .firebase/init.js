// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSQL7l4Sw37CQd0TLskqyt9_wWz-PtHqI",
    authDomain: "zubinworks.firebaseapp.com",
    projectId: "zubinworks",
    storageBucket: "zubinworks.appspot.com",
    messagingSenderId: "84594810031",
    appId: "1:84594810031:web:842c67f8b48efe9b91485a",
    measurementId: "G-XQ9VR7C8BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
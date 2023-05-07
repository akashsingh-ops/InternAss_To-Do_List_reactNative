// firebase config key setup
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// my web app`s firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4WpRHPsPz93KRJFgXMfobAvOzEmX-0HU",
  authDomain: "test-auth-a8a39.firebaseapp.com",
  projectId: "test-auth-a8a39",
  storageBucket: "test-auth-a8a39.appspot.com",
  messagingSenderId: "766380800818",
  appId: "1:766380800818:web:55d376be39bd5b7e11752b",
  measurementId: "G-YW5QSV4S8V",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };

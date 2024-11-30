// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth , getReactNativePersistence, getAuth,} from 'firebase/auth'
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP5SGwU5aQD7eeedF0LzpGKz3wq_0qEiA",
  authDomain: "react-native-auth-demo-446b6.firebaseapp.com",
  projectId: "react-native-auth-demo-446b6",
  storageBucket: "react-native-auth-demo-446b6.firebasestorage.app",
  messagingSenderId: "1070988963985",
  appId: "1:1070988963985:web:0b7d3866bc5747d62e8f30"
};
let auth;
if(getApps().length == 0){
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence : getReactNativePersistence(ReactNativeAsyncStorage)
    })
}else{
    auth = getAuth()
}



export default auth;
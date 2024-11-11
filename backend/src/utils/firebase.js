import {initializeApp} from "firebase/app"
  import { getAuth } from "firebase/auth";
  import { getStorage } from "firebase/storage";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAfugU8o8f2ewly9GhFGAXvdrRo0t3Il30",
    authDomain: "resturent-uploadimage.firebaseapp.com",
    projectId: "resturent-uploadimage",
    storageBucket: "resturent-uploadimage.appspot.com",
    messagingSenderId: "703949675168",
    appId: "1:703949675168:web:189890cea3346e6c9b07c5",
    measurementId: "G-QSXELM2MLK"
  };

// Initialize Firebase
export const app=initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const imageDb = getStorage(app)
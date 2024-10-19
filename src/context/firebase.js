import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLH_A3SF9Wy_EypKJqPiOr6KWPA3bXPHI",
    authDomain: "restaurant-web-20821.firebaseapp.com",
    projectId: "restaurant-web-20821",
    storageBucket: "restaurant-web-20821.appspot.com",
    messagingSenderId: "389324717270",
    appId: "1:389324717270:web:40ddaa5caec63a8f63dd77",
    measurementId: "G-11QC4RM8Q7"
  };

  export const app=initializeApp(firebaseConfig)
  export const auth = getAuth(app)
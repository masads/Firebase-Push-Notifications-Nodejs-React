import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0AP8hzY24uyV3Dhg0GqpG8qkyO1ekrn8",
  authDomain: "miletapnotification.firebaseapp.com",
  projectId: "miletapnotification",
  storageBucket: "miletapnotification.appspot.com",
  messagingSenderId: "460204660009",
  appId: "1:460204660009:web:74bf9bd403a8b9637a9338",
  measurementId: "G-C5D330JF1R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

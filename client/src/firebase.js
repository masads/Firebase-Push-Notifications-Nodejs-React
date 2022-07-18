import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
export const requestForToken = async () => {
  return getToken(messaging, {
    vapidKey:
      "BHmWbx89_EQ53He6goJBaQXZ0Ij5Aot5xFbdBbDNMPPW8M_J35FbcUhubzVbmvNB4N2PMOme0q-Vo25lf7Pmex4",
  });
};

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      //   console.log("payload", payload);
      resolve(payload);
    });
  });

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
//put here your credentials
const firebaseConfig = {
//   apiKey: ,
//   authDomain: ,
//   projectId: ,
//   storageBucket: ,
//   messagingSenderId: ,
//   appId: ",
//   measurementId: ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
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

// export const onMessageListener = () => {
//   return new Promise((resolve, reject) => {
//     onMessage(messaging, (payload) => {
//       console.log(payload);
//       resolve(payload);
//     });
//   });
// };

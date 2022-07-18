importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA0AP8hzY24uyV3Dhg0GqpG8qkyO1ekrn8",
  authDomain: "miletapnotification.firebaseapp.com",
  projectId: "miletapnotification",
  storageBucket: "miletapnotification.appspot.com",
  messagingSenderId: "460204660009",
  appId: "1:460204660009:web:74bf9bd403a8b9637a9338",
  measurementId: "G-C5D330JF1R",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// messaging.onBackgroundMessage(function(payload) {
//   console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

// self.registration.showNotification(notificationTitle, notificationOptions);
// self.registration.hideNotification();
// });
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   self.registration.hideNotification();
// });

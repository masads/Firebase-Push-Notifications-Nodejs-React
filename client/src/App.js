import "./App.css";
import React, { useEffect } from "react";
import { getMessaging, getToken } from "firebase/messaging";

import { app } from "./firebase";

function App() {
  useEffect(() => {
    async function requestPermissionFirebase() {
      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BCh1WD1DurmGcVu-MndcmtiEixexE9s3xfwE3dy6Jf5QFsQMEyxSic45a_we9glDMZDTeECHNiLISLemz3kTOdk",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
    requestPermissionFirebase();
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;

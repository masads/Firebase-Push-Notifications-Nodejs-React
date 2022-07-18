import "./App.css";
import React, { useState } from "react";
import {
  requestForToken,
  onMessageListener,
  requestFirebaseNotificationPermission,
} from "./firebase";
import { useEffect } from "react";
// import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    if (name.length != 0) {
      setLogin(true);
      await requestForToken()
        .then(async (currentToken) => {
          if (currentToken) {
            setToken(currentToken);
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
      await requestFirebaseNotificationPermission()
        .then((firebaseToken) => {
          console.log(firebaseToken);
        })
        .catch((err) => {
          return err;
        });
    }
  };
  useEffect(() => {
    if (token) {
      onMessageListener()
        .then((payload) => {
          // const { title, body } = payload.data;
          console.log(payload);
        })
        .catch((err) => {
          console.log("error on messagelistener");
        });
    }
    console.log(token);
  }, [token]);
  return (
    <div className="App">
      <header className="App-header">
        {login ? (
          <div>Hello {name}</div>
        ) : (
          <div>
            <input
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <button onClick={handleLogin}>Submit</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

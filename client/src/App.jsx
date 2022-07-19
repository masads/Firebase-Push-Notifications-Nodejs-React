import "./App.css";
import React, { useState } from "react";
import {
  requestForToken,
  onMessageListener,
  requestFirebaseNotificationPermission,
  messaging,
} from "./firebase";
import { onMessage } from "firebase/messaging";
import { useEffect } from "react";
import axios from "axios";
import { async } from "@firebase/util";

const client = axios.create({
  baseURL: "http://localhost:4000/",
});
function App() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");
  const [call, setCall] = useState(false);
  const [callingStatus, setCallingStatus] = useState("calling");
  const [connected, setConnected] = useState(false);
  const [caller, setCaller] = useState("");
  const [acceptCall, setAcceptCall] = useState(false);
  //login
  const handleLogin = async () => {
    if (name.length != 0) {
      //need to change right now names are hardcode
      if (name == "asad" || name == "bari") {
        client
          .post("/useronline", {
            name,
            status: true,
          })
          .then((response) => {
            console.log(response);
          })
          .catch(() => {
            console.log("error sending notification");
          });
        setLogin(true);
        await requestForToken()
          .then(async (currentToken) => {
            if (currentToken) {
              console.log(currentToken);
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
    }
  };
  //logout
  const handleLogout = async () => {
    client
      .post("/useronline", {
        name,
        status: false,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        console.log("error sending notification");
      });
    setLogin(false);
    setName("");
  };
  //call
  const handleCall = async () => {
    setCall(true);
    let caller = name;
    let reciver = name == "asad" ? "bari" : "asad";
    client
      .post("/sendcallingnotification", {
        caller,
        reciver,
      })
      .then((response) => {
        console.log(response);
        if (response.data.data.online) {
          setCallingStatus("Ringing");
        }
      })
      .catch(() => {
        console.log("error sending notification");
      });
    // let;
  };
  useEffect(() => {
    if (token) {
      // let notification = onMessageListener();
      // console.log(notification, ":");
      onMessage(messaging, (payload) => {
        console.log(payload);
        if (payload.data && payload.data.notificationType === "calling") {
          setCaller(payload.data.name);
          setAcceptCall(true);
        }
      });
      // if (notification && notification.notificationType === "calling") {
      //   setCaller(notification.name);
      //   setAcceptCall(true);
      // }
    }
    console.log(token);
  }, [token]);
  return (
    <div className="App">
      <header className="App-header">
        {login ? (
          <>
            {acceptCall ? (
              <div>
                <div>{caller} is calling </div>
                <button
                  onClick={() => {
                    setConnected(true);
                  }}
                >
                  Accept
                </button>
              </div>
            ) : (
              <div></div>
            )}
            <div>
              Hello {name}{" "}
              {!call ? (
                <button onClick={handleCall}>Call</button>
              ) : (
                <button
                  onClick={() => {
                    setCall(false);
                  }}
                >
                  End Call
                </button>
              )}
            </div>{" "}
            <button onClick={handleLogout}>Logout</button>
            {call ? <div>{callingStatus}</div> : <div></div>}
          </>
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

import "./App.css";
import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import axios from "axios";
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
const client = axios.create({
	baseURL: "http://localhost:4000",
});

function App() {
	useEffect(() => {
		async function requestPermissionFirebase() {
			const messaging = getMessaging(app);
			console.log(messaging);
			getToken(messaging, {
				vapidKey:
					"BHmWbx89_EQ53He6goJBaQXZ0Ij5Aot5xFbdBbDNMPPW8M_J35FbcUhubzVbmvNB4N2PMOme0q-Vo25lf7Pmex4",
			})
				.then(
					async (
						currentToken,
					) => {
						if (
							currentToken
						) {
							console.log(
								currentToken,
							);
							await client.post(
								"/notification",
								{
									token: currentToken,
								},
							);
						} else {
							console.log(
								"No registration token available. Request permission to generate one.",
							);
							// ...
						}
					},
				)
				.catch((err) => {
					console.log(
						"An error occurred while retrieving token. ",
						err,
					);
					// ...
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

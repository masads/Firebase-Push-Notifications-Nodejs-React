import { google } from "googleapis";
import admin from "firebase-admin";

const key = require("../service-account-file.json");
// const MESSAGING_SCOPE =
// 	"https://www.googleapis.com/auth/firebase.messaging";
// const SCOPES = [MESSAGING_SCOPE];
admin.initializeApp({
	credential: admin.credential.cert(key),
});

// function getAccessToken() {
// 	return new Promise(function (resolve, reject) {
// 		// // console.log(key);
// 		const jwtClient = new google.auth.JWT(
// 			key.client_email,
// 			null!,
// 			key.private_key,
// 			SCOPES,
// 			null!,
// 		);
// 		jwtClient.authorize(function (err: any, tokens) {
// 			if (err) {
// 				reject(err);
// 				return;
// 			}
// 			resolve(tokens?.access_token);
// 		});
// 	});
// }
// getAccessToken()
// .then((token)=>{
//     console.log("wow",token)
// }).catch((err)=>{
//     console.log("rerr")
// })


export default admin;
import express, { Request, Response } from "express";
const fetch = require("node-fetch");
import { google } from "googleapis";
import admin from "firebase-admin";
export const router = express.Router();
const key = require("../service-account-file.json");
const MESSAGING_SCOPE =
	"https://www.googleapis.com/auth/firebase.messaging";
const SCOPES = [MESSAGING_SCOPE];
admin.initializeApp({
	credential: admin.credential.cert(key),
});
console.log(key)
function getAccessToken() {
	return new Promise(function (resolve, reject) {
		// // console.log(key);
		const jwtClient = new google.auth.JWT(
			key.client_email,
			null!,
			key.private_key,
			SCOPES,
			null!,
		);
		jwtClient.authorize(function (err: any, tokens) {
			if (err) {
				reject(err);
				return;
			}
			resolve(tokens?.access_token);
		});
	});
}

router.get("/", (req: Request, res: Response): void => {
	res.json({ message: "hello" });
});

router.post("/notification", (req: Request, res: Response) => {

	let payload = {
		notification: {
			title: "title of notification",
			body: "body of notification",
		},
		data: {
			score: "850",
			time: "2:45",
		},
	};

	console.log(admin.messaging);
	admin.messaging()
		.sendToDevice(
			req.body.token,
			payload,
		)
		.then((response) => {
			// Response is a message ID string.
			console.log(
				"Successfully sent message:",
				response,
			);
			res.json({ message: "done" });
		})
		.catch((error) => {
			console.log(
				"Error sending message:",
				error,
			);
			res.json({ message: "error" });
		});

	
});

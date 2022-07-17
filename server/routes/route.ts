import express, { Request, Response } from "express";
const fetch = require("node-fetch");
import { google } from "googleapis";
import admin from "firebase-admin";
export const router = express.Router();
const key = require("../../../../fcm key/service-account-file.json");
const MESSAGING_SCOPE =
	"https://www.googleapis.com/auth/firebase.messaging";
const SCOPES = [MESSAGING_SCOPE];
admin.initializeApp({
	credential: admin.credential.cert(key),
});

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
	console.log(req.body);

	let notification = {
		title: "title of notification",
		text: "Subtitle",
	};
	let fcm_tokens: any = [
		"cuadDXIiQ2sp6SMqhzjMmj:APA91bHBylyYqRyu-D9dhW-uj50w4pPWEaFjJaVY64GFbyCR27VIv9uwSuCQMcGMqE2Zrxh0mm2pKsdwStvwBSmEkf3yJdE5RpyLsdFXWJ_OIRUAIRS_hK7mz8hQYDU4s_tYtXDW0TxU",
	];
	let notification_body = {
		notification: notification,
		registration_ids: fcm_tokens,
	};
	getAccessToken().then(function (accessToken) {
		// console.log("=", accessToken, "=");
		// fetch("https://fcm.googleapis.com/fcm/send", {
		// 	method: "POST",
		// 	headers: {
		// 		Authorization:
		// 			"Bearer" +
		// 			"ya29.c.b0AXv0zTPfwJ0niObOt7lkRpPq-rstMCPDCoQRKeCGEn4XKTIDv7UOGrPbS3lJK72W5kTYQfblwK8Ycg_4jzCvI7X_FuuS_oUd14gP_2qFbPckNMfxWC9ivBbzhQ7zO1qASQZKSKk9LI-1sEcXrUnSRzR9qn3YFyIHHRshNEJM8IX8BCWvNY7Km2Th3P69I0k5SO6NrlyEhmm8j2jhugAEY-5acyXHnU4.",
		// 	},
		// 	body: JSON.stringify(notification_body),
		// })
		// 	.then(() => {
		// 		res.status(200).json({
		// 			message: "Notification send successfully",
		// 		});
		// 	})
		// 	.catch((err: any) => {
		// 		res.status(400).json({
		// 			message: "something went wrong",
		// 		});
		// 		console.log(
		// 			"notification Error:",
		// 			err,
		// 		);
		// 	});
		const registrationToken =
			"cuadDXIiQ2sp6SMqhzjMmj:APA91bHBylyYqRyu-D9dhW-uj50w4pPWEaFjJaVY64GFbyCR27VIv9uwSuCQMcGMqE2Zrxh0mm2pKsdwStvwBSmEkf3yJdE5RpyLsdFXWJ_OIRUAIRS_hK7mz8hQYDU4s_tYtXDW0TxU";

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
				registrationToken,
				payload,
			)
			.then((response) => {
				// Response is a message ID string.
				console.log(
					"Successfully sent message:",
					response,
				);
			})
			.catch((error) => {
				console.log(
					"Error sending message:",
					error,
				);
			});
	});

	res.json({ message: "done" });
});


import express, { Request, Response } from "express";
export const router = express.Router();
import admin from '../config/firebase'

import {userOnline,getUser,createUser} from "../controller/user"
import { sendCallingNotification } from '../controller/notification';

router.get("/", (req: Request, res: Response): void => {
	res.json({ message: "hello" });
});

router.post("/useronline",userOnline);

router.get("/getuser",getUser)

router.post("/createuser",createUser)

router.post("/sendcallingnotification",sendCallingNotification)

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

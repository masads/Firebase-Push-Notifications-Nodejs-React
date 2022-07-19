import { Request, Response } from "express";
import { User ,USERTOKEN} from "../model/user"
import admin from '../config/firebase'

export const sendCallingNotification=async (req:Request,res:Response)=>{
    try {
        console.log("first")
        const user:any = await User.findOne({"name":req.body.reciver});
        console.log(user)

        let payload = {
            notification: {
                title: `${req.body.caller} is calling`,
                body: `${req.body.caller} is calling`,
            },
            data: {
                notificationType:"calling",
                name:req.body.caller
            },
        };

        admin.messaging()
		.sendToDevice(
			user.token,
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

        res.json({ message: "user", data: {
            online:user.online,
        } });
    } catch (error) {
        res.json({ message: "Error in send Notification", data: error });
    }
}
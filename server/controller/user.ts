import { Request, Response } from "express";
import { User } from "../model/user"

export const userOnline=async (req:Request,res:Response)=>{
    try {

        const user = await User.findOneAndUpdate({name:req.body.name},{online:req.body.status});
        res.json({ message: "user" ,user});
    } catch (error) {
        res.json({ message: "Error in send Notification", data: error });
    }
}


export const createUser=async (req:Request,res:Response)=>{
    try {
        const user = await User.create(req.body);
        res.json({ message: "user" ,user });
    } catch (error) {
        res.json({ message: "Error in send Notification", data: error });
    }
}


export const getUser=async (req:Request,res:Response)=>{
    try {
        const user = await User.find();
        res.json({ message: "user" ,user });
    } catch (error) {
        res.json({ message: "Error in send Notification", data: error });
    }
}


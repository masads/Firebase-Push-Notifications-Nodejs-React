import { Schema,model } from 'mongoose';

export interface USERTOKEN {
    token:string,
    name:string,
    online:Boolean 
  }
  
const userSchema = new Schema<USERTOKEN>({
    token:String,
    name:String,
    online:Boolean 
});

export const User = model<USERTOKEN>('user', userSchema);

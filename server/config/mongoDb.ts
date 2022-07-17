import { Schema, model, connect } from 'mongoose';



export async function run() {
  try {
    await connect('mongodb+srv://masads:asad123@cluster0.lfazrop.mongodb.net/?retryWrites=true&w=majority');
    console.log("connected");
  } catch (error) {
    console.log("mongoose db error",error)
  }
}

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
export const DB_Connection = async () => {
  try {
    const connect_Code = await mongoose.connect(
      `${process.env.MOGODB_URL}/${DB_NAME}`
    );
    console.log("You Have SucessFully Connected the DataBase");
    // console.log(connect_Code);
  } catch (error) {
    console.log("ERRO in CONNECTING DB", error);
    process.exit(1);
  }
};

export default DB_Connection;

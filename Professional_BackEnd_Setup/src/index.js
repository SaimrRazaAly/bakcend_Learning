
import DB_Connection from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

DB_Connection();

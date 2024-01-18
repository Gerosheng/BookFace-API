import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
const NODE_ENV = process.env.NODE_ENV;

dotenv.config({
  path: `.env.${NODE_ENV}`
})
const PORT = process.env.PORT;
const DB_URI= process.env.DB_URI;

export {
    PORT,
    DB_URI,
    NODE_ENV
}
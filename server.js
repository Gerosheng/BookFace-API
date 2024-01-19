import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { databaseSingleton } from "./src/typings/database.js";
import Server from "./src/typings/server.js";
import { PORT, DB_URI } from "./src/configuration/config.js";
import { fileURLToPath } from "url";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const globalMiddlewares = [
  express.urlencoded({ extended: true }),
  express.json(),
  cors({
    credentials: true, 
    origin: true
  })
];

/* DATABASE INSTANCE */
const MongoDB = databaseSingleton.getInstanceDB(DB_URI);

/* SERVER INSTANCE */
const server = new Server(app, MongoDB, PORT);
server.loadMiddlewares(globalMiddlewares);
server.initDatabase();
server.run();
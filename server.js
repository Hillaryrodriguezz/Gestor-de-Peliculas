import express from "express";
import { config } from "./config/config.js";

const app = express();
const PORT = 5041;
config(app);

app.listen(PORT);
console.log(`Server Listen on Port: ${PORT}`);

import express from "express";
import apiRouter from "./routes/apiRouter.js";

const app = express();

app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set up sessions

app.use("*all", apiRouter);

export default app;

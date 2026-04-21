import express from "express";
import type { NextFunction, Request, Response } from "express";
import probesRouter from "./probes/probesRouter.js";

const apiRouter = express.Router();

function requireSession(req: Request, res: Response, next: NextFunction) {
  //TODO check session variables
  next();
}

apiRouter.use("/health", probesRouter);

apiRouter.get("*all", (req: Request, res: Response) => {
  res.status(200).send("Hello from the API!!");
});

export default apiRouter;

import express from "express";
import type { NextFunction, Request, Response } from "express";
import probesRouter from "./probes/probes.router.js";
import currentNumberRouter from "./currentNumber/currentNumber.router.js";

const apiRouter = express.Router();

function requireSession(req: Request, res: Response, next: NextFunction) {
  //TODO check session variables
  next();
}

apiRouter.use("/health", probesRouter);
apiRouter.use("/test", currentNumberRouter);

apiRouter.get("/*all", (req: Request, res: Response) => {
  const response = JSON.stringify({ message: "Hello from the API!" });
  res.status(200).send(response);
});

export default apiRouter;

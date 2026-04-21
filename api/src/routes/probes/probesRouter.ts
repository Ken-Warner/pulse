import express from "express";
import { healthCheck, livenessCheck } from "./probesController.js";

const healthRouter = express.Router();

healthRouter.get("/ping", livenessCheck);
healthRouter.get("/readiness", healthCheck);

export default healthRouter;

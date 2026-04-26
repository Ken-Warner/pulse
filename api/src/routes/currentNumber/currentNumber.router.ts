import express from "express";
import { getCurrentNumber } from "./currentNumber.controller.js";

const currentNumberRouter = express.Router();

currentNumberRouter.get("/currentNumber", getCurrentNumber);

export default currentNumberRouter;

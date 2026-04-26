import type { Request, Response } from "express";
import { selectLatestNumber } from "../../models/currentNumber.model.js";

export async function getCurrentNumber(req: Request, res: Response) {
  const latestNumber = await selectLatestNumber();
  return res.status(200).send(JSON.stringify({ latestNumber: latestNumber }));
}

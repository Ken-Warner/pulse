import type { Request, Response } from "express";

export function healthCheck(req: Request, res: Response) {
  res.status(200).send();
}

export function livenessCheck(req: Request, res: Response) {
  res.status(200).send("pong");
}

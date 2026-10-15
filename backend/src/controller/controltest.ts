import { type Request, type Response } from "express";

export const controltest = (req: Request, res: Response) => {
  res.json({ message: "what up fool" });
};

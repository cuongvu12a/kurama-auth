import * as express from "express";
import { Request, Response } from "express";

export const authRoute = express.Router();

authRoute.post("/register", (req: Request, res: Response) => {
  res.send("hello world!");
});

authRoute.post("/login", (req: Request, res: Response) => {
  res.send("hello world!");
});

authRoute.get("/me", (req: Request, res: Response) => {
  res.send("hello world!");
});

authRoute.put("/update/:id", (req: Request, res: Response) => {
  res.send("hello world!");
});

authRoute.delete("/:id", (req: Request, res: Response) => {
  res.send("hello world!");
});

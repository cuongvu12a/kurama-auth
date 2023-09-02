import * as express from "express";
import { Request, Response } from "express";

import { PORT } from "src/constants";
import { authRoute } from "src/routers";

const app = express();

// Parse JSON
app.use(express.json());

app.use(authRoute);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello, this is Node.js, Express.js and TypeScript.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

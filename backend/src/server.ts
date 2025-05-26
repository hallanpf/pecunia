import express, { Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "../src/swagger-output.json";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(router);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof Error) {
    return response.status(400).json({ error: err.message });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server running at ${port} port | documetation at http://localhost:3000/swagger`);
});

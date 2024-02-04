import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import notesRouters from "./routes/notes";
import createHttpError, { isHttpError } from "http-errors";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/notes", notesRouters);

app.use((req, res, next) => {
  next(createHttpError(404, "Not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;

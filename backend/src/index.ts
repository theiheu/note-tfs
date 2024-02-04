import mongoose from "mongoose";
import env from "./utils/validateEnv";
import app from "./app";

const port = env.PORT || 5000;

mongoose
  .connect(env.MONGODB_CONNECT_STRING)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(console.error);

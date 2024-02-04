import { cleanEnv, str, port } from "envalid";

export default cleanEnv(process.env, {
  MONGODB_CONNECT_STRING: str(),
  PORT: port({ default: 5000 }),
});

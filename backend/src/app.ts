import fastify from "fastify";
import cors from "@fastify/cors";

import { userRoutes } from "./routes/user.routes"

export const app = fastify();

const allowedOrigins = ["http://localhost:3000", "http://localhost:3000/"];

app.register(cors, { origin: allowedOrigins });

app.register(userRoutes)

app.get("/", (_req, res) => {
  res.send("Server Running in port 3001");
});

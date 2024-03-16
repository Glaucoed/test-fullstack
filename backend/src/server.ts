import { app } from "./app";

try {
  app.listen({ port: 3001 }).then(() => {
    console.log(`Server is running on port 3001`);
  });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}



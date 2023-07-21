import { server } from "infra/http/express";

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log("🔥 Server listening on port", PORT);
});

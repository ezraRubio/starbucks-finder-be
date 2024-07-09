import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { controllers } from "./context";

const app = express()
  .use(cors({ origin: "*" }))
  .use(bodyParser.json())
  .use("/", express.static("dist"))
  .use("/api", controllers);

app.listen(3003, () => {
  console.log("Server listening");
});

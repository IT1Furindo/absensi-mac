require("dotenv").config();
import cors from "cors";
import express, { Request, Response } from "express";
import router from "./routes/router";

const app = express();
const port = process.env.PORT || 8081;
const HOSTNAME = process.env.HOSTNAME || "localhost";

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: `Server running at ${HOSTNAME}:${port}`,
  });
});

app.use("/", router);

app.listen(+port, HOSTNAME, () => {
  console.log(`Server listening at http://${HOSTNAME}:${port}`);
});

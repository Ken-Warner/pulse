import express from "express";
import cors from "cors";
import apiRouter from "./routes/apiRouter.js";

const app = express();

app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: "https://api.oureventualdomain.com",
      credentials: true,
    }),
  );
} else {
  app.use(cors());
}

//set up sessions

app.use("/", apiRouter);

export default app;

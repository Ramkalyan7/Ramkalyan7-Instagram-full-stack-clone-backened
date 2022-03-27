import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/postroutes.js";

//app config
const app = express();

//middlewares

app.use(bodyParser.json({ limit: "30mb", extented: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

//db config and listen
const CONNECTION_URL = DATABASE_URL;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port:http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect to database`));

//mongoose.set("useFindAndModify", false);

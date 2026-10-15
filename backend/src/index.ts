import express from "express";
import "dotenv/config";
import test from "./routes/routetest.ts"

const app = express();

const port = process.env.PORT;
app.use("/test", test)


app.listen(port, () => {
  console.log(`hello finanical future at ${port}`);
});

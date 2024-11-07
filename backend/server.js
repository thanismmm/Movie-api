const express = require("express");
const Movierouter = require("./Routes/movies.route");
const connectDB = require("./lib/db");

const app = express();

app.use(express.json());

connectDB();

app.use("/movies", Movierouter);

const port = 4000;

app.listen(port, () => {
  console.log("server is running at: http://localhost/:" + port);
});

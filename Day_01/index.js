const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Added leading slash to the user route
app.get("/user", (req, res) => {
  res.send("The user is Saim");
});
app.get("/user/ai", (req, res) => {
  res.send("<h1>10000000000000000 </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

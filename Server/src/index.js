const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.post("/api/users/:id/update", (req, res) => {
  setTimeout(() => {
    console.log(req.body);
    res.send(req.body);
  }, [2000]);
});
app.get("/", (req, res) => {
  res.send("<script>console.log('Hello world!')</script>");
});

app.listen(8800, () => {
  console.log("Our Backend server is running");
});

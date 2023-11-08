const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "testUser" && password === "abc123") {
    res.json({ success: true, message: "Login successful" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

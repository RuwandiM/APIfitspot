/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions=require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const {username, password} = req.body;
  if (username === "testUser" && password === "abc123") {
    res.json({success: true, message: "Login successful"});
  } else {
    res
        .status(401)
        .json({success: false, message: "Invalid username or password"});
  }
});

app.get("/test", (req, res)=>{
  res.send("Hello from Firebase!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

exports.app = functions.https.onRequest(app);

const express = require("express");
const app = express();
var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blog-2-c1846-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.firestore();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('server is running on PORT ${PORT}.')
})

console.log("h")
import express from "express";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const port = 3000;
const host = "localhost";
// Luodaan express-palvelin instanssi
const app = express();

//otetaan käytöön EJS engine
app.set("view engine", "EJS");
app.set("views", path.join(__dirname, "templates"));

app.use("/styles", express.static("includes/styles"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/palaute", (req, res) => {
  res.render("palaute");
});
app.post("/palaute", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  res.render("vastaus", {name: name, email: email});
});


app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));

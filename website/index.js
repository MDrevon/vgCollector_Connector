console.log("Linked");
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require(`./queries`);

//import {getConsoles} from `./queries.js`;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  console.log({ info: "Node.js, Express, and Postgres" });
  res.json({ info: "Node.js, Express, and Postgres" });
});

app.get("/consoles", db.getConsoles);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

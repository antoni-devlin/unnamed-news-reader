import { engine } from "express-handlebars";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
  })
);

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Server Expresso ☕");
});

app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("Server Expresso ☕ About");
});

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 Not found ☕_☕");
});

app.listen(port, () =>
  console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `)
);

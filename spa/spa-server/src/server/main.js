import express from "express";
import ViteExpress from "vite-express";

import morgan from 'morgan';
import bodyParser from "body-parser";
import errorHandler from "errorhandler";

const app = express();
app.use(morgan('combined'))
// app.use(bodyParser)
app.use(errorHandler({
  log: true
}))

app.get("/", (req, res) => {
  res.redirect("/index.html")
})

app.get("/hello", (req, res) => {
  res.send("Hello Vite!");
})

app.get("/user/list", (req, res) => {
  res.contentType('json')
  res.send({title: 'user list'})
})

// TODO: P.244

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

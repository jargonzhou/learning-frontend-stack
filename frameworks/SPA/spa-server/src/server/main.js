import express from "express";
import ViteExpress from "vite-express";

import morgan from 'morgan';
import bodyParser from "body-parser";
import errorHandler from "errorhandler";

import { isDev } from "./config.js";

import { route as CRUDRoute } from "./route/crud.js";

import { setUpSocket } from "./socket.js";

// ========================================================
// Express
// ========================================================
const app = express();
// app.use(bodyParser)
if (isDev()) {
  app.use(morgan('dev'))
  app.use(errorHandler({
    log: true
  }))
} else {
  app.use(morgan('combined'))
}

app.get("/", (req, res) => {
  res.redirect("/index.html")
})

app.get("/hello", (req, res) => {
  res.send("Hello Vite!");
})

app.use(bodyParser.json())

// ========================================================
// CRUD Routes
// ========================================================
CRUDRoute(app)

// ViteExpress.listen(app, 3000, () =>
//   console.log("Server is listening on port 3000..."),
// );

const server = app.listen(3000, "0.0.0.0", () =>
  console.log("Server is listening...")
);

// ========================================================
// Setup Socket.IO
// ========================================================
setUpSocket(server, app)

ViteExpress.bind(app, server);

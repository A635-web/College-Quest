/**
 * @author Aditya
 */

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// const Multer = require("multer");
const helmet = require("helmet");
const WebSocket = require("ws");
const mongo = require("./config/mongo");
const { loggerUtil: logger } = require("./utils/logger");
const { statusCode: SC } = require("./utils/statusCode");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//mongo connection func call
mongo();

const { routesV1 } = require("./routes/index");

const { validationResult } = require("express-validator");

//validate req
app.use((req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(SC.WRONG_ENTITY).json({ error: errors.array() });
  }
  console.log(req.cookies);
  next();
});

//built-in middlewares
app.use(express.static("public"));
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});
//cloudinary
const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Routes
routesV1(app);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware
app.use(globalErrorHandler);

//connection
const PORT = process.env.PORT || 8006;

app.listen(PORT, () => {
  logger(`Listening on port--------- ${PORT}`, "SERVER");
});

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

const clients = new Set();

// Handle incoming WebSocket connections
wss.on("connection", (ws) => {
  // Handle messages from the client
  ws.on("message", (message) => {
    console.log("Received message:", message);

    // Send a response back to the client
    ws.send("Server received your message: " + message);
    clients.forEach((client) => {
      client.send(message);
    });
  });

  // Handle WebSocket connection close
  ws.on("close", () => {
    clients.delete(ws);
    console.log("WebSocket connection closed");
  });

  // Send a welcome message to the client
  ws.send("Welcome to the WebSocket server!");
});

console.log("WebSocket server started on port 8080");

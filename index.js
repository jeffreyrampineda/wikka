if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app");
const http = require("http");

const port = process.env.PORT || 3001;
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

server.listen(port, () =>
  console.log(`The server is running at http://localhost:${port}/`)
);
server.on("error", onError);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

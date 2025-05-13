try {
  process.loadEnvFile();
} catch (e) {
  console.warn(".env file not found, using default values.");
}

const jsonServer = require("json-server");
const morgan = require("morgan");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(morgan("dev"));
server.use(cors());
server.options("*", cors());
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});

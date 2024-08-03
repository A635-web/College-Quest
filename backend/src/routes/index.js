const auth = require("./auth");
const team = require("./team");
const club = require("./club");
const upload = require("./Upload");
const applicationRoutes = require("./applicationRoutes");

function routesV1(app) {
  app.use("/api/v1/user", auth);
  app.use("/api/v1", team);
  app.use("/api/v1/clubs", club);
  app.use("/api/v1/upload", upload);
  app.use("/api/v1/application", applicationRoutes);
}

module.exports = { routesV1 };

const studentRoutes = require("./students");
const groupsRoutes = require("./groups");
module.exports = app => {
  app.use("/students", studentRoutes);
  app.use("/groups", groupsRoutes);
};

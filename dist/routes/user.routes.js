"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _usercontroller = require('../controllers/user.controller');

const userRoutes = (app) => {
  app.post("/user", _usercontroller.create);
  app.get("/user", _usercontroller.get);
  app.get("/user/:id", _usercontroller.getId);
  app.put("/user/:id", _usercontroller.update);
  app.delete("/user/:id", _usercontroller.remove)
};

exports. default = userRoutes;

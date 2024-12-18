import {
  get,
  getId,
  update,
  remove,
  register,
  login,
  getEmail,
} from "../controllers/user.controller";

const userRoutes = (app) => {
  app.post("/user", register);
  app.post("/login", login);
  app.get("/user", get);
  app.get("/user/id/:id", getId);
  app.put("/user/:id", update);
  app.delete("/user/:id", remove);
  app.get("/user/email", getEmail)
};

export default userRoutes;

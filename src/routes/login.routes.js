import { initPage } from "../controllers/login.controller";

const loginRoutes = (app) => {
  app.get("/", initPage);
};

export default loginRoutes;

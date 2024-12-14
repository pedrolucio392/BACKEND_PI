import userRoutes from "./user.routes";
import bookRoutes from "./book.routes";
import loginRoutes from "./login.routes";

const routes = (app) => {
  userRoutes(app);
  bookRoutes(app);
  loginRoutes(app);
};

export default routes;

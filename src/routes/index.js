import userRoutes from "./user.routes";
import bookRoutes from "./book.routes";

const routes = (app) => {
  userRoutes(app);
  bookRoutes(app);
};

export default routes;

import userRoutes from "./user.routes";
import bookRoutes from "./book.routes";
import orderRoutes from "./order.routes";
import orderItemRoutes from "./orderItem.routes";

const initPage = async (req, res) => {
  try {
    res.status(200).json({ msg: "Bem vindo a nossa API" });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};

const routes = (app) => {
  app.get("/", initPage);
  userRoutes(app);
  bookRoutes(app);
  orderRoutes(app);
  orderItemRoutes(app);
};

export default routes;

import {
  finalizeOrder,
  getAllOrders,
  getOrderById,
  removeOrderById,
  updateOrderById,
} from "../controllers/order.controller";
import { verifyAdmin } from "../middlewares/auth.middleware";

const orderRoutes = (app) => {
  app.post("/order", finalizeOrder); // Criar um novo livro
  app.get("/order/admin", verifyAdmin, getAllOrders); // Obter todos os livros para admin
  app.get("/order/:id", getOrderById); // Obter um livro pelo ID
  app.put("/order/:id", updateOrderById); // Atualizar um livro pelo ID
  app.delete("/order/:id", removeOrderById); // Deletar um livro pelo ID
};

export default orderRoutes;

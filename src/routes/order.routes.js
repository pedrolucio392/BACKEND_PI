import {
  finalizeOrder,
  getAllOrders,
  getOrderById,
  removeOrderById,
  updateOrderById,
} from "../controllers/order.controller";

const orderRoutes = (app) => {
  app.post("/order", finalizeOrder); // Criar um novo livro
  app.get("/order", getAllOrders); // Obter todos os livros
  app.get("/order/:id", getOrderById); // Obter um livro pelo ID
  app.put("/order/:id", updateOrderById); // Atualizar um livro pelo ID
  app.delete("/order/:id", removeOrderById); // Deletar um livro pelo ID
};

export default orderRoutes;

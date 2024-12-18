import {
  getAllOrderItems,
  getOrderItemById,
  register,
  removeOrderItemById,
  updateOrderItemById,
} from "../controllers/orderItem.controller";

const orderItemRoutes = (app) => {
  app.post("/order-item", register); // Criar um novo item de pedido
  app.get("/order-item", getAllOrderItems); // Obter todos os itens de pedidos
  app.get("/order-item/:id", getOrderItemById); // Obter um item de pedido pelo ID
  app.put("/order-item/:id", updateOrderItemById); // Atualizar um item de pedido pelo ID
  app.delete("/order-item/:id", removeOrderItemById); // Deletar um item de pedido pelo ID
};

export default orderItemRoutes;

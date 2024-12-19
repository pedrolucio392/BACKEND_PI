import { orderValidation } from "../validations/order.validation";
import {
  createOrder,
  deleteOrder,
  getAll,
  getById,
  updateOrder,
} from "../repositorys/order.repository";

export const finalizeOrder = async (req, res) => {
  try {
    // Valida os dados do pedido
    await orderValidation.validate(req.body, { abortEarly: false });

    const { userId, items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message:
          "O carrinho está vazio. Adicione itens antes de finalizar a compra.",
      });
    }

    // Estrutura para criar o pedido
    const data = {
      userId,
      orderItems: {
        create: items.map((item) => ({
          bookId: item.bookId,
          quantity: item.quantity,
        })),
      },
    };

    const newOrder = await createOrder(data);

    return res.status(201).json({
      success: true,
      message: "Pedido finalizado com sucesso!",
      data: newOrder,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Erro ao finalizar o pedido",
      error: e.message,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await getAll();

    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Erro ao buscar pedidos",
      error: e.message,
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await getById(Number(id));
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Pedido não encontrado",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Pedido recuperado com sucesso",
      data: order,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Erro ao buscar pedido",
      error: e.message,
    });
  }
};

// Atualizar um pedido
export const updateOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedOrder = await updateOrder(Number(id), req.body);

    return res.status(200).json({
      success: true,
      message: "Pedido atualizado com sucesso",
      data: updatedOrder,
    });
  } catch (e) {
    if (e.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Erro de validação",
        errors: e.errors,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Erro ao atualizar pedido",
      error: e.message,
    });
  }
};

// Remover um pedido
export const removeOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await deleteOrder(Number(id));

    return res.status(200).json({
      success: true,
      message: "Pedido removido com sucesso",
      data: deletedOrder,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Erro ao remover pedido",
      error: e.message,
    });
  }
};

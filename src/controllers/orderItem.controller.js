import { orderItemValidation } from "../validations/orderItem.validation";
import {
  createOrderItem,
  deleteOrderItem,
  getAll,
  getById,
  updateOrderItem,
} from "../repositorys/orderItem.repository";

export const register = async (req, res) => {
  try {
    // Validação dos dados do item do pedido
    await orderItemValidation.validate(req.body, { abortEarly: false });

    // Criação do item do pedido
    const newOrderItem = await createOrderItem(req.body);

    return res.status(201).json({
      success: true,
      message: "Item do pedido registrado com sucesso",
      data: newOrderItem,
    });
  } catch (e) {
    if (e.name === "ValidationError") {
      // Erros de validação do Yup
      return res.status(400).json({
        success: false,
        message: "Erro de validação",
        errors: e.errors, // Array com todas as mensagens de erro
      });
    }

    // Outros erros (ex.: banco de dados)
    return res.status(500).json({
      success: false,
      message: "Erro ao registrar item do pedido",
      error: e.message,
    });
  }
};

export const getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await getAll();

    return res.status(200).json({
      success: true,
      message: "Itens de pedidos recuperados com sucesso",
      data: orderItems,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Erro ao buscar itens de pedidos",
      error: e.message,
    });
  }
};

export const getOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const orderItem = await getById(Number(id));
    if (!orderItem) {
      return res.status(404).json({
        success: false,
        message: "Item do pedido não encontrado",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Item do pedido recuperado com sucesso",
      data: orderItem,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Erro ao buscar item do pedido",
      error: e.message,
    });
  }
};

export const updateOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedOrderItem = await updateOrderItem(Number(id), req.body);

    return res.status(200).json({
      success: true,
      message: "Item do pedido atualizado com sucesso",
      data: updatedOrderItem,
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
      message: "Erro ao atualizar item do pedido",
      error: e.message,
    });
  }
};

export const removeOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrderItem = await deleteOrderItem(Number(id));

    return res.status(200).json({
      success: true,
      message: "Item do pedido removido com sucesso",
      data: deletedOrderItem,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Erro ao remover item do pedido",
      error: e.message,
    });
  }
};

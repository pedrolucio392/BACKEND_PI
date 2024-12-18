import { prisma } from "../services/prisma";

export const createOrderItems = async (orderId, items) => {
  return prisma.orderItem.createMany({
    data: items.map((item) => ({
      orderId,
      bookId: item.bookId,
      quantity: item.quantity,
    })),
  });
};

export const getAll = async () => {
  const orderItems = await prisma.orderItem.findMany({
    include: {
      book: true, // Inclui o livro relacionado
      order: true, // Inclui o pedido relacionado
    },
  });
  return orderItems;
};

export const getById = async (id) => {
  const orderItem = await prisma.orderItem.findUnique({
    where: {
      id,
    },
    include: {
      book: true, // Inclui o livro relacionado
      order: true, // Inclui o pedido relacionado
    },
  });
  return orderItem;
};

export const updateOrderItem = async (id, data) => {
  const orderItem = await prisma.orderItem.update({
    where: {
      id,
    },
    data,
    include: {
      book: true, // Inclui o livro relacionado, se houver
      order: true, // Inclui o pedido relacionado, se houver
    },
  });
  return orderItem;
};

export const deleteOrderItem = async (id) => {
  const orderItem = await prisma.orderItem.delete({
    where: {
      id,
    },
  });
  return orderItem;
};

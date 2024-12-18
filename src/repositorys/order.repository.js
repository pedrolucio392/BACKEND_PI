import { prisma, Prisma } from "../services/prisma";

export const createOrder = async (data) => {
  const order = await prisma.order.create({
    data,
    include: {
      orderItems: true, // Inclui os itens do pedido na resposta
    },
  });
  return order;
};

export const getAll = async () => {
  const orders = await prisma.order.findMany({
    include: {
      user: true, // Inclui informações do usuário
      orderItems: {
        include: {
          book: true, // Inclui informações do livro relacionado
        },
      },
    },
  });

  // Formatar as datas para cada pedido
  const formattedOrders = orders.map((order) => {
    return {
      ...order,
      createdAt: new Date(order.createdAt).toLocaleString("pt-BR", {
        weekday: "long", // Dia da semana
        year: "numeric", // Ano
        month: "long", // Mês por extenso
        day: "numeric", // Dia
        hour: "2-digit", // Hora
        minute: "2-digit", // Minuto
        second: "2-digit", // Segundo
      }),
      updatedAt: new Date(order.updatedAt).toLocaleString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
  });

  return formattedOrders;
};

export const getById = async (id) => {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      items: {
        include: {
          book: true,
        },
      },
    },
  });
  return order;
};

export const updateOrder = async (id, data) => {
  const order = await prisma.order.update({
    where: {
      id,
    },
    data,
    include: {
      items: true, // Inclui itens atualizados, se houver
    },
  });
  return order;
};

export const deleteOrder = async (id) => {
  const order = await prisma.order.delete({
    where: {
      id,
    },
  });
  return order;
};

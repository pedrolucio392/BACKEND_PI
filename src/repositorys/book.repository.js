import { prisma, Prisma } from "../services/prisma";

export const createBook = async (data) => {
  const book = await prisma.book.create({
    data,
    select: {
      id: true,
      title: true,
      author: true,
      price: true,
      stock: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return book;
};

export const getAllBooks = async () => {
  const books = await prisma.book.findMany({
    select: {
      id: true,
      title: true,
      author: true,
      price: true,
      stock: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return books;
};

export const getBookById = async (id) => {
  const book = await prisma.book.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      author: true,
      price: true,
      stock: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return book;
};

export const updateBook = async (id, data) => {
  const book = await prisma.book.update({
    where: { id },
    data,
    select: {
      id: true,
      title: true,
      author: true,
      price: true,
      stock: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return book;
};

export const deleteBook = async (id) => {
  const book = await prisma.book.delete({
    where: { id },
    select: {
      id: true,
      title: true,
      author: true,
      price: true,
      stock: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return book;
};

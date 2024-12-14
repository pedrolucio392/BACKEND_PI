"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prisma = require('../services/prisma');

 const createBook = async (data) => {
  const book = await _prisma.prisma.book.create({
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
}; exports.createBook = createBook;

 const getAllBooks = async () => {
  const books = await _prisma.prisma.book.findMany({
  });
  return books;
}; exports.getAllBooks = getAllBooks;

 const getBookById = async (id) => {
  const book = await _prisma.prisma.book.findUnique({
    where: { id },
  });
  return book;
}; exports.getBookById = getBookById;

 const updateBook = async (id, data) => {
  const book = await _prisma.prisma.book.update({
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
}; exports.updateBook = updateBook;

 const deleteBook = async (id) => {
  const book = await _prisma.prisma.book.delete({
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
}; exports.deleteBook = deleteBook;

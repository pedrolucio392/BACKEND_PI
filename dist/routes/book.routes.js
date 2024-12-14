"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _bookcontroller = require('../controllers/book.controller');

const bookRoutes = (app) => {
  app.post("/book", _bookcontroller.create); // Criar um novo livro
  app.get("/book", _bookcontroller.get); // Obter todos os livros
  app.get("/book/:id", _bookcontroller.getById); // Obter um livro pelo ID
  app.put("/book/:id", _bookcontroller.update); // Atualizar um livro pelo ID
  app.delete("/book/:id", _bookcontroller.remove); // Deletar um livro pelo ID
};

exports. default = bookRoutes;

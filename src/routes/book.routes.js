import { create, get, getById, update, remove } from "../controllers/book.controller";

const bookRoutes = (app) => {
  app.post("/book", create); // Criar um novo livro
  app.get("/book", get); // Obter todos os livros
  app.get("/book/:id", getById); // Obter um livro pelo ID
  app.put("/book/:id", update); // Atualizar um livro pelo ID
  app.delete("/book/:id", remove); // Deletar um livro pelo ID
};

export default bookRoutes;

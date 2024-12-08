import { bookValidation } from "../validations/book.validation";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../repositorys/book.repository.js";

export const create = async (req, res) => {
  try {
    await bookValidation.validate(req.body);

    const book = await createBook(req.body);

    res.status(201).send(book);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export const get = async (req, res) => {
  try {
    const books = await getAllBooks();
    res.status(200).send(books);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export const getById = async (req, res) => {
  try {
    const book = await getBookById(Number(req.params.id));
    if (!book) {
      return res.status(404).send({ error: "Livro não encontrado" });
    }
    res.status(200).send(book);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export const update = async (req, res) => {
  try {
    const book = await updateBook(Number(req.params.id), req.body);
    res.status(200).send(book);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export const remove = async (req, res) => {
  try {
    const book = await deleteBook(Number(req.params.id));
    res.status(200).send(book);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

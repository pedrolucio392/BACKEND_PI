"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _bookvalidation = require('../validations/book.validation');






var _bookrepositoryjs = require('../repositorys/book.repository.js');

 const create = async (req, res) => {
  try {
    await _bookvalidation.bookValidation.validate(req.body);

    const book = await _bookrepositoryjs.createBook.call(void 0, req.body);

    res.status(201).send(book);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
}; exports.create = create;

 const get = async (req, res) => {
  try {
    const books = await _bookrepositoryjs.getAllBooks.call(void 0, );
    res.status(200).send(books);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
}; exports.get = get;

 const getById = async (req, res) => {
  try {
    const book = await _bookrepositoryjs.getBookById.call(void 0, Number(req.params.id));
    if (!book) {
      return res.status(404).send({ error: "Livro não encontrado" });
    }
    res.status(200).send(book);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
}; exports.getById = getById;

 const update = async (req, res) => {
  try {
    const book = await _bookrepositoryjs.updateBook.call(void 0, Number(req.params.id), req.body);
    res.status(200).send(book);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
}; exports.update = update;

 const remove = async (req, res) => {
  try {
    const book = await _bookrepositoryjs.deleteBook.call(void 0, Number(req.params.id));
    res.status(200).send(book);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
}; exports.remove = remove;

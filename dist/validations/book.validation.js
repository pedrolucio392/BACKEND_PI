"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);

 const bookValidation = yup.object({
  title: yup.string().required("O título é obrigatório."),
  author: yup.string().required("O autor é obrigatório."),
  price: yup
    .number()
    .required("O preço é obrigatório.")
    .positive("O preço deve ser um valor positivo."),
  stock: yup
    .number()
    .required("O estoque é obrigatório.")
    .integer("O estoque deve ser um número inteiro.")
    .min(0, "O estoque não pode ser negativo."),
}); exports.bookValidation = bookValidation;
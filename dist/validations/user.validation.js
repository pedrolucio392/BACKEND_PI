"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);

 const userValidation = yup.object({
    name: yup
      .string()
      .trim()
      .required("O campo nome é obrigatório."),
    email: yup
      .string()
      .trim()
      .email("O e-mail deve ser válido.")
      .required("O campo e-mail é obrigatório."),
    password: yup
      .string()
      .required("O campo senha é obrigatório.")
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
  }); exports.userValidation = userValidation;
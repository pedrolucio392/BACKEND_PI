"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);
var _uservalidation = require('../validations/user.validation');







var _userrepository = require('../repositorys/user.repository');



 const create = async (req, res) => {
  try {

    const validatedData = await _uservalidation.userValidation.validate(req.body, { abortEarly: false });

    const hashPassword = await _bcrypt2.default.hash(validatedData.password, 10);

    const user = await _userrepository.createUser.call(void 0, { ...validatedData, password: hashPassword });

    res.status(201).send(user);
  } catch (e) {
    if (e.name === "ValidationError") {
      return res.status(400).json({ errors: e.errors });
    }
    res.status(500).send("Erro interno do servidor.");
  }
}; exports.create = create;

 const get = async (req, res) => {
  try {
    const users = await _userrepository.getAll.call(void 0, );
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
}; exports.get = get;

 const getId = async (req, res) => {
  try {
    const user = await _userrepository.getById.call(void 0, Number(req.params.id));
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
}; exports.getId = getId;

 const update = async (req, res) => {
  try {
    const user = await _userrepository.updateUser.call(void 0, Number(req.params.id), req.body);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
}; exports.update = update;

 const remove = async (req, res) => {
  try {
    const user = await _userrepository.deleteUser.call(void 0, Number(req.params.id));
    res.status(200).send({
      message: "User deleted successfully",
      user,
    });
  } catch (e) {
    res.status(400).send({
      error: "Failed to delete user",
      details: e,
    });
  }
}; exports.remove = remove;

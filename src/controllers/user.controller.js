import bcrypt from "bcrypt";
import { userValidation } from "../validations/user.validation";
import {
  createUser,
  deleteUser,
  getAll,
  getById,
  updateUser,
  deleteUser
} from "../repositorys/user.repository";



export const create = async (req, res) => {
  try {

    const validatedData = await userValidation.validate(req.body, { abortEarly: false });

    const hashPassword = await bcrypt.hash(validatedData.password, 10);

    const user = await createUser({ ...validatedData, password: hashPassword });

    res.status(201).send(user);
  } catch (e) {
    if (e.name === "ValidationError") {
      return res.status(400).json({ errors: e.errors });
    }
    res.status(500).send("Erro interno do servidor.");
  }
};

export const get = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getId = async (req, res) => {
  try {
    const user = await getById(Number(req.params.id));
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const update = async (req, res) => {
  try {
    const user = await updateUser(Number(req.params.id), req.body);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const remove = async (req, res) => {
  try {
    const user = await deleteUser(Number(req.params.id));
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
};

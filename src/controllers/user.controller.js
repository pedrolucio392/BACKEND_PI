import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userValidation } from "../validations/user.validation";
import {
  createUser,
  deleteUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
  getByEmail,
} from "../repositorys/user.repository";

// export const create = async (req, res) => {
//   try {
//     const validatedData = await userValidation.validate(req.body, {
//       abortEarly: false,
//     });

//     const hashPassword = await bcrypt.hash(validatedData.password, 10);

//     const user = await createUser({ ...validatedData, password: hashPassword });

//     res.status(201).send(user);
//   } catch (e) {
//     if (e.name === "ValidationError") {
//       return res.status(400).json({ errors: e.errors });
//     }
//     res.status(500).send("Erro interno do servidor.");
//   }
// };

export const register = async (req, res) => {
  try {
    const validatedData = await userValidation.validate(req.body, {
      abortEarly: false,
    });

    const existingUser = await getByEmail(req.body.email);

    if (existingUser) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    // Criptografar senha
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Criar usuário
    const newUser = await createUser({
      ...validatedData,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Usuário registrado",
      newUser,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Erro ao registrar usuário",
      e,
    });
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

export const login = async (req, res) => {
  try {
    const user = await getByEmail(req.body.email);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Tempo de expiração do token
    );

    return res.status(200).json({ token });

    // return res.status(200).send(user);
  } catch (e) {
    return res.status(500).json({ message: "Erro no servidor", e });
  }
};

export const getEmail = async (req, res) => {
  try {
    const user = await getByEmail(req.body.email);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

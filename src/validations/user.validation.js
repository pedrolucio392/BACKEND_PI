import * as yup from "yup";

export const userValidation = yup.object({
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
  });
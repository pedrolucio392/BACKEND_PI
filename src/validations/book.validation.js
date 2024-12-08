import * as yup from "yup";

export const bookValidation = yup.object({
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
});